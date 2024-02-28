import { useState, useEffect } from 'react'

import {
    CheckboxField,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Button,
    View
} from '@aws-amplify/ui-react'

import { gql, ApolloClient, InMemoryCache } from '@apollo/client'
import axios from 'axios'

const AgentApplicationServices = () => {
    const [agentList, setAgentList] = useState([])
    const [agentSettings, setAgentSettings] = useState([])
    const [token, setToken] = useState('')
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const [pageCountData, setPageCountData] = useState(0)

    const client = new ApolloClient({
        uri: 'https://gw3svcvuare3fbgsgnfqzp26na.appsync-api.us-east-2.amazonaws.com/graphql',
        cache: new InMemoryCache(),
        headers: {
            'X-Api-Key': 'da2-noawmbt5zzgkxns7ghko7irfhe',
        },
    })
    const GET_TOKEN = gql`
        query MyQuery {
            listKeyStores(filter: { id: { eq: "1" } }) {
                items {
                    access_token
                }
            }
        }
    `
    const getPageofUser = async (page = 0, pagesize = 10) => {
        setAgentList([])

        try {
            const response = await client.query({ query: GET_TOKEN })
            const token = response.data.listKeyStores.items[0].access_token
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            console.log(`Bearer ${token}`)

            const apiResponse = await axios.get(
                `https://api.wxcc-us1.cisco.com/organization/19244874-d919-4bde-9d9a-dbff87ae472c/v2/user?page=${page}&pageSize=${pagesize}`,
                {
                    headers,
                }
            )
            const userData = apiResponse.data.data
            const metaData = apiResponse.data.meta

            

            let tempAgentList = userData.map((item) => ({
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
            }))

            setAgentList(tempAgentList)
            setPage(metaData.page)
            setPageSize(metaData.pageSize)
            setTotalPages(metaData.totalPages)
         
            console.log(`1 getPageofUser- Page:${page}, pageSize:${pageSize} totalPage: ${totalPages} metaData: ${JSON.stringify(metaData.pageSize, null,2)}`)
        } catch (error) {
            console.error(error)
        }
    }

    const buildPaginationNavigation = () => {
        const paginationLinks = []
    
        // Previous Page Button
        if (page > 0) {
            paginationLinks.push(
                <button onClick={() => getPageofUser(page - 1, pageSize)}>Previous</button>
            )
        }
    
        // Page Numbers
        for (let i = 0; i < totalPages; i++) {
            paginationLinks.push(
                <button onClick={() => getPageofUser(i, pageSize)}>{i + 1}</button>
            )
        }
    
        // Next Page Button
        if (page < totalPages - 1) {
            paginationLinks.push(
                <button onClick={() => getPageofUser(page + 1, pageSize)}>Next</button>
            )
        }
      
        return paginationLinks
    }

    useEffect(() => {
        getPageofUser()
        setPageCountData()

        console.log(pageCountData)
    }, [])

    return (
        <>
            <div>Update Application Services Settings</div>
            <Table highlightOnHover={true} variation="bordered">
                <TableHead>
                    <TableCell as="th">Select</TableCell>
                    <TableCell as="th">Name</TableCell>
                    <TableCell as="th">Click to Dial calls are Made</TableCell>
                    <TableCell as="th">Group Pages are received</TableCell>
                    <TableCell as="th">
                        A call the user parked is recalled back to the user’s
                        line
                    </TableCell>
                    <TableCell as="th">Browser Client Enabled</TableCell>
                    <TableCell as="th">Desktop Client Enabled</TableCell>
                    <TableCell as="th">Table Client Enabled</TableCell>
                    <TableCell as="th">Mobile Client Enabled</TableCell>
                </TableHead>
                <TableBody>
                    {agentList.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="save"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                {item.firstName} {item.lastName}
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="ringDevicesForClickToDialCallsEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="ringDevicesForGroupPageEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="ringDevicesForCallParkEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="browserClientEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="desktopClientEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="tabletClientEnabled"
                                    value="true"
                                />
                            </TableCell>
                            <TableCell>
                                <CheckboxField
                                    label=""
                                    name="mobileClientEnabled"
                                    value="true"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
           <View paddingLeft="100px" paddingTop="40px"> {buildPaginationNavigation(pageCountData)}</View>
        </>
    )
}
export default AgentApplicationServices
