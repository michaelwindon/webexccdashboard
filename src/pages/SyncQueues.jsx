import * as React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { DummyQueueData } from './DummyQueueData'
import { QueueModel } from '../models'
import { DataStore, Predicates, SortDirection } from 'aws-amplify/datastore'

import { gql, ApolloClient, InMemoryCache } from '@apollo/client'

import axios from 'axios'

function returndelta(arr1, arr2) {
    const names1 = arr1.map((obj) => obj.name)
    const names2 = arr2.map((obj) => obj.name)
    const uniqueNames = new Set([...names1, ...names2])
    return arr1
        .filter((obj) => !names2.includes(obj.name))
        .concat(arr2.filter((obj) => !names1.includes(obj.name)))
}
function returnmatching(arr1, arr2) {
    const names1 = arr1.map((obj) => obj.name)
    const names2 = arr2.map((obj) => obj.name)
    return arr1.filter((obj1) => names2.includes(obj1.name))
}

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1)
}

function notobj(a, b) {
    return a.filter((obj1) => b.some((obj2) => obj1.name !== obj2.name))
}

function intersectionobj(a, b) {
    return a.filter((obj1) => b.some((obj2) => obj1.name === obj2.name))
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1)
}

export default function SyncQueues({ showToastMessage }) {
    const [checked, setChecked] = React.useState([])

    //left is webext Queue data
    const [left, setLeft] = React.useState([])

    //right is WAM Queue Data
    const [right, setRight] = React.useState([])

    const leftChecked = intersection(checked, left)
    const rightChecked = intersection(checked, right)

    const [webexQueueData, setWebexQueueData] = React.useState([])
    const [token, setToken] = React.useState('')

    const GET_TOKEN = gql`
        query MyQuery {
            listKeyStores(filter: { id: { eq: "1" } }) {
                items {
                    access_token
                }
            }
        }
    `

    const client = new ApolloClient({
        uri: 'https://gw3svcvuare3fbgsgnfqzp26na.appsync-api.us-east-2.amazonaws.com/graphql',
        cache: new InMemoryCache(),
        headers: {
            'X-Api-Key': 'da2-noawmbt5zzgkxns7ghko7irfhe',
        },
    })

    React.useEffect(() => {
        //initalize selectors

        try {
            client.query({ query: GET_TOKEN }).then((results) => {
                setToken(results.data.listKeyStores.items[0].access_token)
            })
        } catch (error) {
            console.log(e)
        }
        console.log(`Retreived Token: ${token}`)

        const headers = { Authorization: `Bearer ${token}` }
        try {
            if (token != '') {
                axios
                    .get(
                        'https://api.wxcc-us1.cisco.com/organization/19244874-d919-4bde-9d9a-dbff87ae472c/v2/contact-service-queue?page=0&pageSize=100&attributes=id,name,description,active',
                        { headers }
                    )
                    .then((response) => {
                        setWebexQueueData(response.data.data)
                        console.log(`Set Webex Queue Data!`)
                    })
            }
        } catch (error) {
            console.log(e)
        }

        const getWamData = async () => {
            const que = await DataStore.query(QueueModel, Predicates.ALL, {
                sort: (s) => s.name(SortDirection.ASCENDING),
            })
            //set left to the delta of what Webex has and what is the WAM

            webexQueueData.sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            })
            //Set left with the latest from Webex - minus whats already in WAM
            setLeft(returndelta([...webexQueueData], que))
            //set right to everything in WAM
            setRight(que)
        }
        getWamData()
    }, [token])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const handleAllRight = () => {
        setRight(right.concat(left))
        setLeft([])

        //push to WAM
        left.map(async (value) => {
            try {
                const q = await DataStore.save(
                    new QueueModel({
                        id: value.id,
                        name: value.name,
                    })
                )
                showToastMessage(`${value.name} Synced to WAM!`, 'success')
            } catch (e) {
                handleonError(value.name)
                console.log(e)
            }
        })
    }

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked))
        setLeft(not(left, leftChecked))

        //push to WAM
        const savePromises = leftChecked.map(async (value) => {
            try {
                const q = await DataStore.save(
                    new QueueModel({
                        id: value.id,
                        name: value.name,
                    })
                )
                showToastMessage(`${value.name} Synced to WAM!`, 'success')
            } catch (e) {
                handleonError(value.name + 'DB Error!')
                console.log(e)
            }
        })

        // Wait for all the Promises to be resolved before calling setChecked()
        Promise.all(savePromises).then(() => {
            setChecked(not(checked, leftChecked))
        })
    }

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked))
        setRight(not(right, rightChecked))

        //remove queue from WAM
        const savePromises = rightChecked.map(async (value) => {
            try {
                const toDelete = await DataStore.query(QueueModel, value.id)
                DataStore.delete(toDelete).then(
                    showToastMessage(`${value.name} Deleted from WAM!`, 'error')
                )
            } catch (e) {
                handleonError(value.name + 'DB Error!')
                console.log(e)
            }
        })

        Promise.all(savePromises).then(() => {
            setChecked(not(checked, rightChecked))
        })
    }

    const handleAllLeft = () => {
        setLeft(left.concat(right))
        setRight([])

        //remove queue from WAM
        right.map(async (value) => {
            try {
                const toDelete = await DataStore.query(QueueModel, value.id)
                DataStore.delete(toDelete)
                showToastMessage(`${value.name} Deleted from WAM!`, 'error')
            } catch (e) {
                handleonError(value.name + 'DB Error!')
                console.log(e)
            }
        })
    }

    const handleonError = (name) => {
        showToastMessage(`💣 ${name} Error Saving Queues!`, 'error')
    }

    const handleonSuccess = (name) => {
        showToastMessage(`${name} Sync Sucessfully!🚀`, 'success')
    }

    const customList = (items, title) => (
        <>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Paper sx={{ width: 400, height: 430, overflow: 'auto' }}>
                <List dense component="div" role="list">
                    {items.map((value) => {
                        const labelId = `transfer-list-item-${value}-label`

                        return (
                            <ListItemButton
                                key={value.id}
                                role="listitem"
                                onClick={handleToggle(value)}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={labelId}
                                    primary={`${value.name}`}
                                />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Paper>
        </>
    )

    return (
        <>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                padding="1rem"
            >
                <Grid item>{customList(left, 'From Webex')}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllRight}
                            disabled={left.length === 0}
                            aria-label="move all right"
                        >
                            ≫
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllLeft}
                            disabled={right.length === 0}
                            aria-label="move all left"
                        >
                            ≪
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    {customList(right, 'To WAM')} {right.length} of{' '}
                    {webexQueueData.length} Queues
                </Grid>
            </Grid>
        </>
    )
}
