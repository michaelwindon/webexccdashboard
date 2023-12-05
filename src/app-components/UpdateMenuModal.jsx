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
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MyIcon } from '../ui-components'
import { QueueModel, ContactCenterModel } from '../models'
import { DataStore } from 'aws-amplify/datastore'

const UpdateMenuModal = (props) => {
    const { tokens } = useTheme()

    const { groupid, onClose, open, item, menunumber, contactcenter } = props

    const [showQueue, setshowQueue] = useState(false)
    const [showForward, setshowForward] = useState(false)
    const [showSubmenu, setshowSubmenu] = useState(false)
    const [showMessage, setshowMessage] = useState(false)
    const [menuType, setmenuType] = useState('')
    const [queues, setQueues] = useState([])
    const [fieldValue, setfieldValue] = useState('')
    const [fieldMsg, setFieldMsg] = useState('')

    const toggleQueue = () => {
        setshowQueue(!showQueue)
        if (!showQueue && item?.type == 'QUEUE') {
            setfieldValue(item.value)
        } else {
            setfieldValue('')
        }
        setshowForward(false)
        setshowSubmenu(false)
        setshowMessage(false)
    }
    const toggleForward = () => {
        setshowForward(!showForward)
        if (!showForward && item?.type == 'FORWARD') {
            setfieldValue(item.value)
        } else {
            setfieldValue('')
        }
        setshowSubmenu(false)
        setshowMessage(false)
        setshowQueue(false)
    }

    const toggleSubmenu = () => {
        setshowSubmenu(!showSubmenu)
        if (!showSubmenu && item?.type == 'SUBMENU') {
            setfieldValue(item.value)
        } else {
            setfieldValue('')
        }
        setshowMessage(false)
        setshowQueue(false)
        setshowForward(false)
    }
    const toggleMessge = () => {
        setshowMessage(!showMessage)

        if (!showMessage && item?.type == 'MSG') {
            setfieldValue(item.value)
        } else {
            setfieldValue('')
        }
        setshowQueue(false)
        setshowForward(false)
        setshowSubmenu(false)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                if (open) {
                    const data = await DataStore.query(QueueModel, (q) =>
                        q.queueModelGroupId.eq(groupid)
                    )
                    setQueues(data)
                    /*    console.log(`fetching data...`) */
                }
            } catch (error) {
                console.error(`Error retrieving Queues 💩! ${error}`)
            }
        }

        async function fetchDatawithoutrestrictions() {
            try {
                if (open) {
                    const data = await DataStore.query(QueueModel)
                    setQueues(data)
                    /* console.log(`fetching data...`) */
                }
            } catch (error) {
                console.error(`Error retrieving Queues 💩! ${error}`)
            }
        }

        {
            groupid == '' ? fetchDatawithoutrestrictions() : fetchData()
        }
        setFieldMsg(item?.msg)
    }, [open, groupid])

    const handleFieldChange = (e) => {
        setfieldValue(e.target.value)
    }
    const handleFieldMsgChange = (e) => {
        setFieldMsg(e.target.value)
    }

    const handleSubmit = async () => {
        const updatedMenu = { msg: fieldMsg, type: menuType, value: fieldValue }

        const orignal = await DataStore.query(
            ContactCenterModel,
            contactcenter.id
        )

        if (orignal) {
            try {
                const updateContactCenter = await DataStore.save(
                    ContactCenterModel.copyOf(orignal, (update) => {
                        switch (menunumber) {
                            case '1':
                                update.menu1 = updatedMenu
                                break
                            case '2':
                                update.menu2 = updatedMenu
                                break
                            case '3':
                                update.menu3 = updatedMenu
                                break
                            case '4':
                                update.menu4 = updatedMenu
                                break
                            case '5':
                                update.menu5 = updatedMenu
                                break
                            case '6':
                                update.menu6 = updatedMenu
                                break

                            case '7':
                                update.menu7 = updatedMenu
                                break

                            case '8':
                                update.menu8 = updatedMenu
                                break

                            case '9':
                                update.menu9 = updatedMenu
                                break

                            case '0':
                                update.menu0 = updatedMenu
                                break

                            case 'override':
                                update.override = updatedMenu
                                break

                            case 'afterhours':
                                update.afterhours = updatedMenu
                                break

                            case 'holidayoption':
                                update.holidayoption = updatedMenu
                                break

                            default:
                                console.error(
                                    `Error in handleSubmit: No Updates made as no menu number was given!`
                                )
                                break
                        }
                    })
                )
                console.log(
                    `Sucessful submition to the DB! 🚀: {"msg":"${fieldMsg}", "type":"${menuType}", "value" : "${fieldValue}" for menu: ${menunumber} }`
                )
            } catch (error) {
                console.error(`Error in handleSubmit: ${error}`)
                /* console.log(
                    `{"msg":"${fieldMsg}", "type":"${menuType}", "value" : "${fieldValue}" for menu: ${menunumber} }`
                ) */
            }
        }

        onClose()
    }
    /* console.log(
        `{"msg":"${fieldMsg}", "type":"${menuType}", "value" : "${fieldValue}" for menu: ${menunumber} }`
    ) */
    return (
        <>
            <Dialog fullWidth={true} maxWidth="lg" open={open}>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                >
                    <Card>
                        <Flex direction="row" alignItems="flex-start">
                            <MyIcon
                                {...(item?.type == 'FORWARD' && {
                                    type: 'phone',
                                })}
                                {...(item?.type == 'MSG' && {
                                    type: 'chat',
                                })}
                                {...(item?.type == 'QUEUE' && {
                                    type: 'group',
                                })}
                                {...(item?.type == 'SUBMENU' && {
                                    type: 'share',
                                })}
                                height="300px"
                                width="25%"
                            />
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                gap={tokens.space.large}
                            >
                                <Flex>
                                    <Heading level={3}>
                                        Main Menu Prompt {menunumber}
                                    </Heading>
                                </Flex>
                                <View width="50em">
                                    <TextAreaField
                                        rows={3}
                                        name="menu_msg"
                                        label="Prompt"
                                        onChange={handleFieldMsgChange}
                                        defaultValue={item?.msg}
                                    />
                                </View>

                                <Flex>
                                    <Heading level={3}>Menu Type</Heading>
                                </Flex>
                                <Flex direction="row" alignItems="flex-start">
                                    <ButtonGroup>
                                        <Button
                                            onClick={() => {
                                                toggleMessge()
                                                setmenuType('MSG')
                                            }}
                                        >
                                            <MyIcon type="chat" /> Message
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                toggleForward()
                                                setmenuType('FORWARD')
                                            }}
                                        >
                                            <MyIcon type="phone" /> Forward
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                toggleQueue()
                                                setmenuType('QUEUE')
                                            }}
                                        >
                                            <MyIcon type="group" /> Queue
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                toggleSubmenu()
                                                setmenuType('SUBMENU')
                                            }}
                                        >
                                            <MyIcon type="share" /> Submenu
                                        </Button>
                                    </ButtonGroup>
                                </Flex>
                                {showMessage && (
                                    <Flex>
                                        <View width="50em">
                                            <TextAreaField
                                                rows={3}
                                                onChange={handleFieldChange}
                                                name="menu_msg"
                                                label="Play Message"
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
                                            onChange={handleFieldChange}
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
                                            onChange={handleFieldChange}
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
                                                onChange={handleFieldChange}
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
                                    <Button
                                        onClick={() => {
                                            setmenuType('')
                                            setshowForward(false)
                                            setshowMessage(false)
                                            setshowQueue(false)
                                            setshowSubmenu(false)
                                            setfieldValue('')
                                            setFieldMsg('')
                                            onClose()
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variation="primary"
                                        onClick={handleSubmit}
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
UpdateMenuModal.propTypes = {
    groupid: PropTypes.string, // 'groupid' is the used to only display the items that are assigned to the same group
    onClose: PropTypes.func, // 'onClose'  function sent from the called Componet used to control the opening and closing of the Modal
    open: PropTypes.bool, // 'open'  Booleing value used control modal open and close
    item: PropTypes.object, // 'item'  object contains the menu being shown
    menunumber: PropTypes.string, // 'menunumber'  string represeting the menu title
    contactcenter: PropTypes.object, // 'contactcenter' the specific contact center obj beening displayed
}

export default UpdateMenuModal
