import {
    Heading,
    View,
    useTheme,
    Card,
    Flex,
    Placeholder,
    ButtonGroup,
    Button,
    TextAreaField,
    TextField,
    SelectField,
} from '@aws-amplify/ui-react'
import Dialog from '@mui/material/Dialog'
import { useEffect, useState } from 'react'
import { MyIcon } from '../ui-components'
import { QueueModel } from '../models'
import { DataStore } from 'aws-amplify/datastore'

const UpdateMenuModal = (props) => {
    const { tokens } = useTheme()

    const { groupid, onClose, open, item } = props

    const [showQueue, setshowQueue] = useState(false)
    const [showForward, setshowForward] = useState(false)
    const [showSubmenu, setshowSubmenu] = useState(false)
    const [showMessage, setshowMessage] = useState(false)
    const [queues, setQueues] = useState([])

    const toggleQueue = () => {
        setshowQueue(!showQueue)
        setshowForward(false)
        setshowSubmenu(false)
        setshowMessage(false)
    }
    const toggleForward = () => {
        setshowForward(!showForward)
        setshowSubmenu(false)
        setshowMessage(false)
        setshowQueue(false)
    }

    const toggleSubmenu = () => {
        setshowSubmenu(!showSubmenu)
        setshowMessage(false)
        setshowQueue(false)
        setshowForward(false)
    }
    const toggleMessge = () => {
        setshowMessage(!showMessage)
        setshowQueue(false)
        setshowForward(false)
        setshowSubmenu(false)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await DataStore.query(QueueModel, (q) =>
                    q.queueModelGroupId.eq(groupid)
                )
                setQueues(data)
            } catch (error) {
                console.error(`Error retrieving Queues 💩! ${error}`)
            }
        }
        async function fetchDatawithoutrestrictions() {
            try {
                const data = await DataStore.query(QueueModel)
                setQueues(data)
                console.log(
                    `Retrived Queues Without Restrictions Sucessfully 👍🏾! ${JSON.stringify(
                        data,
                        null,
                        2
                    )}`
                )
            } catch (error) {
                console.error(`Error retrieving Queues 💩! ${error}`)
            }
        }

        {
            groupid == '' ? fetchDatawithoutrestrictions() : fetchData()
        }
    }, [groupid])

    return (
        <>
            <Dialog fullWidth={true} maxWidth="lg" open={open}>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                >
                    <Card>
                        <Flex direction="row" alignItems="flex-start">
                            <Placeholder height="300px" width="25%" />
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                gap={tokens.space.large}
                                flex={1}
                            >
                                <Flex flex={1}>
                                    <Heading level={3}>Menu Options</Heading>
                                </Flex>
                                <Flex direction="row" alignItems="flex-start">
                                    <ButtonGroup>
                                        <Button onClick={toggleMessge}>
                                            <MyIcon type="chat" /> Message
                                        </Button>
                                        <Button onClick={toggleForward}>
                                            <MyIcon type="phone" /> Forward
                                        </Button>
                                        <Button onClick={toggleQueue}>
                                            <MyIcon type="group" /> Queue
                                        </Button>
                                        <Button onClick={toggleSubmenu}>
                                            <MyIcon type="share" /> Submenu
                                        </Button>
                                    </ButtonGroup>
                                </Flex>
                                {showMessage && (
                                    <Flex>
                                        <View width="50em">
                                            <TextAreaField
                                                rows={3}
                                                name="menu_msg"
                                                label="Menu Message"
                                                defaultValue={
                                                    item?.type === 'MSG'
                                                        ? item?.value
                                                        : ''
                                                }
                                            />
                                        </View>
                                    </Flex>
                                )}
                                {showForward && (
                                    <Flex>
                                        <TextField
                                            name="menu_forward"
                                            label="Forward Number"
                                            defaultValue={
                                                item?.type === 'FORWARD'
                                                    ? item?.value
                                                    : ''
                                            }
                                        />
                                    </Flex>
                                )}
                                {showQueue && (
                                    <Flex>
                                        <SelectField
                                            name="menu_queue"
                                            label="Choose Queue"
                                            defaultValue={
                                                item?.type === 'QUEUE'
                                                    ? item?.value
                                                    : ''
                                            }
                                        >
                                            <option value=""></option>
                                            {queues.map((queue, index) => (
                                                <option
                                                    key={index}
                                                    value={queue.name}
                                                >
                                                    {queue.name}
                                                </option>
                                            ))}
                                        </SelectField>
                                    </Flex>
                                )}
                                {showSubmenu && (
                                    <Flex>
                                        <View width="50em">
                                            <TextAreaField
                                                rows={3}
                                                name="menu_submenumsg"
                                                label="Submenu Message"
                                                defaultValue={
                                                    item?.type === 'SUBMENU'
                                                        ? item?.value
                                                        : ''
                                                }
                                            />
                                        </View>
                                    </Flex>
                                )}
                                <Flex>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button
                                        variation="primary"
                                        isDisabled={
                                            showMessage ||
                                            showForward ||
                                            showQueue ||
                                            showSubmenu
                                                ? false
                                                : true
                                        }
                                    >
                                        Submit
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Card>
                </View>
            </Dialog>
        </>
    )
}
export default UpdateMenuModal
