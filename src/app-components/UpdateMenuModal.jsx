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
    CheckboxField,
} from '@aws-amplify/ui-react'
import Dialog from '@mui/material/Dialog'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MyIcon } from '../ui-components'
import { QueueModel, ContactCenterModel } from '../models'
import { DataStore } from 'aws-amplify/datastore'
import UpdateSubmenuModal from './UpdateSubmenuModal'

const UpdateMenuModal = (props) => {
    const { tokens } = useTheme()

    const {
        groupid,
        onClose,
        open,
        item,
        menunumber,
        contactcenter,
        user,
        showSpanish,
        refreshContactCenterModal,
    } = props

    const [showQueue, setshowQueue] = useState(false)
    const [showForward, setshowForward] = useState(false)
    const [showSubmenu, setshowSubmenu] = useState(false)
    const [showMessage, setshowMessage] = useState(false)
    const [menuType, setmenuType] = useState('')
    const [queues, setQueues] = useState([])
    const [fieldValue, setfieldValue] = useState('')
    const [fieldMsg, setFieldMsg] = useState('')
    const [isdefault, setIsdefault] = useState(false)
    const [submenu, setSubmenu] = useState()
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [optionnumber, setOptionnumber] = useState()
    const [itemoption, setItemoption] = useState()

    //Refresh Submenu Button after Save in the Submenu Modal
    const updateOptionButton = (updatedMenu) => {
        console.log(
            `Start updateOptionButtonFn updatedMenu:${JSON.stringify(
                updatedMenu
            )}`
        )
        setItemoption(updatedMenu)
        console.log(
            `End updateOptionButtonFn itemoption:${JSON.stringify(itemoption)}`
        )
    }

    const toggleQueue = () => {
        setshowQueue(!showQueue)
        if (!showQueue && item?.type == 'QUEUE') {
            setfieldValue(item.value)
            if (menunumber === contactcenter?.defaultroute && open) {
                //if menu number and default match set to default route on submit. else clear check box for next load.
                setIsdefault(true)
            }
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
            if (menunumber === contactcenter?.defaultroute && open) {
                //if menu number and default match set to default route on submit. else clear check box for next load.
                setIsdefault(true)
            }
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
            if (menunumber === contactcenter?.defaultroute && open) {
                //if menu number and default match set to default route on submit. else clear check box for next load.
                setIsdefault(true)
            }
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
            if (menunumber === contactcenter?.defaultroute && open) {
                //if menu number and default match set to default route on submit. else clear check box for next load.
                setIsdefault(true)
            }
        } else {
            setfieldValue('')
        }
        setshowQueue(false)
        setshowForward(false)
        setshowSubmenu(false)
    }
    const checkIfDefault = () => {
        if (menunumber === contactcenter?.defaultroute && open) {
            //if menu number and default match set to default route on submit. else clear check box for next load.
            setIsdefault(true)
        }
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
        //checkif field is default inital setup or when open changes
        checkIfDefault()

        //setup submenu
        switch (menunumber) {
            case '1':
                setSubmenu(contactcenter?.submenu1)
                break
            case '2':
                setSubmenu(contactcenter?.submenu2)
                break
            case '3':
                setSubmenu(contactcenter?.submenu3)
                break
            case '4':
                setSubmenu(contactcenter?.submenu4)
                break
            case '5':
                setSubmenu(contactcenter?.submenu5)
                break
            case '6':
                setSubmenu(contactcenter?.submenu6)
                break
            case '7':
                setSubmenu(contactcenter?.submenu7)
                break
            case '8':
                setSubmenu(contactcenter?.submenu8)
                break
            case '9':
                setSubmenu(contactcenter?.submenu9)
                break
            case '0':
                setSubmenu(contactcenter?.submenu0)
                break
            default:
                break
        }
    }, [open, optionnumber, contactcenter])

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
                                if (showSpanish) {
                                    update.menu1_sp = updatedMenu
                                } else {
                                    update.menu1 = updatedMenu
                                }

                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '1'
                                } else {
                                    update.defaultroute = null
                                }
                                break
                            case '2':
                                if (showSpanish) {
                                    update.menu2_sp = updatedMenu
                                } else {
                                    update.menu2 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '2'
                                } else {
                                    update.defaultroute = null
                                }
                                break
                            case '3':
                                if (showSpanish) {
                                    update.menu3_sp = updatedMenu
                                } else {
                                    update.menu3 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '3'
                                } else {
                                    update.defaultroute = null
                                }
                                break
                            case '4':
                                if (showSpanish) {
                                    update.menu4_sp = updatedMenu
                                } else {
                                    update.menu4 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '4'
                                } else {
                                    update.defaultroute = null
                                }
                                break
                            case '5':
                                if (showSpanish) {
                                    update.menu5_sp = updatedMenu
                                } else {
                                    update.menu5 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '5'
                                } else {
                                    update.defaultroute = null
                                }
                                break
                            case '6':
                                if (showSpanish) {
                                    update.menu6_sp = updatedMenu
                                } else {
                                    update.menu6 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '6'
                                } else {
                                    update.defaultroute = null
                                }
                                break

                            case '7':
                                if (showSpanish) {
                                    update.menu7_sp = updatedMenu
                                } else {
                                    update.menu7 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '7'
                                } else {
                                    update.defaultroute = null
                                }
                                break

                            case '8':
                                if (showSpanish) {
                                    update.menu8_sp = updatedMenu
                                } else {
                                    update.menu8 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '8'
                                } else {
                                    update.defaultroute = null
                                }
                                break

                            case '9':
                                if (showSpanish) {
                                    update.menu9_sp = updatedMenu
                                } else {
                                    update.menu9 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '9'
                                } else {
                                    update.defaultroute = null
                                }
                                break

                            case '0':
                                if (showSpanish) {
                                    update.menu0_sp = updatedMenu
                                } else {
                                    update.menu0 = updatedMenu
                                }
                                update.updateduser = user.username
                                if (isdefault) {
                                    update.defaultroute = '0'
                                } else {
                                    update.defaultroute = null
                                }
                                break

                            case 'override':
                                update.override = updatedMenu
                                update.updateduser = user.username
                                break

                            case 'afterhours':
                                update.afterhours = updatedMenu
                                update.updateduser = user.username
                                break

                            case 'holidayoption':
                                update.holidayoption = updatedMenu
                                update.updateduser = user.username
                                break

                            case 'secondary':
                                update.secondaryclose = updatedMenu
                                update.updateduser = user.username
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
                    `Successful submition to the DB! 🚀: {"msg":"${fieldMsg}", "type":"${menuType}", "value" : "${fieldValue}" for menu: ${menunumber} default: ${isdefault}, ${updateContactCenter.defaultroute}}`
                )
            } catch (error) {
                console.error(`Error in handleSubmit: ${error}`)
                /* console.log(
                    `{"msg":"${fieldMsg}", "type":"${menuType}", "value" : "${fieldValue}" for menu: ${menunumber} }`
                ) */
            }
        }
        //clear form after submit
        setmenuType('')
        setshowForward(false)
        setshowMessage(false)
        setshowQueue(false)
        setshowSubmenu(false)
        setfieldValue('')
        setFieldMsg('')
        setIsdefault(false)
        onClose()
    }

    return (
        <>
            <UpdateSubmenuModal
                open={submenuOpen}
                onClose={setSubmenuOpen}
                groupid={groupid}
                submenu={submenu}
                menunumber={menunumber}
                contactcenter={contactcenter}
                optionnumber={optionnumber}
                itemoption={itemoption}
                user={user}
                refreshContactCenterModal={refreshContactCenterModal}
            />

            <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={open}
                onClose={onClose}
            >
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
                                        {menunumber === 'override' ||
                                        menunumber === 'afterhours' ||
                                        menunumber === 'secondary' ||
                                        menunumber ===
                                            'holidayoption' ? null : (
                                            <Button
                                                onClick={() => {
                                                    toggleSubmenu()
                                                    setmenuType('SUBMENU')
                                                }}
                                            >
                                                <MyIcon type="share" /> Submenu
                                            </Button>
                                        )}
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
                                    <Flex direction="column">
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
                                        <View
                                            padding="2em"
                                            border="1px solid var(--amplify-colors-black)"
                                        >
                                            <Flex justifyContent="center">
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('1')
                                                            setItemoption(
                                                                submenu?.option1
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option1
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option1
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option1
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 1
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('2')
                                                            setItemoption(
                                                                submenu?.option2
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option2
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option2
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option2
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 2
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('3')
                                                            setItemoption(
                                                                submenu?.option3
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option3
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option3
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option3
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 3
                                                    </Button>
                                                </View>
                                            </Flex>
                                            <Flex justifyContent="center">
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('4')
                                                            setItemoption(
                                                                submenu?.option4
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option4
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option4
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option4
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 4
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('5')
                                                            setItemoption(
                                                                submenu?.option5
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option5
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option5
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option5
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 5
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('6')
                                                            setItemoption(
                                                                submenu?.option6
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option6
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option6
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option6
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 6
                                                    </Button>
                                                </View>
                                            </Flex>
                                            <Flex justifyContent="center">
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('7')
                                                            setItemoption(
                                                                submenu?.option7
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option7
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option7
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option7
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 7
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('8')
                                                            setItemoption(
                                                                submenu?.option8
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option8
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option8
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option8
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 8
                                                    </Button>
                                                </View>
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('9')
                                                            setItemoption(
                                                                submenu?.option9
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option9
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option9
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option9
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 9
                                                    </Button>
                                                </View>
                                            </Flex>
                                            <Flex justifyContent="center">
                                                <View>
                                                    <Button
                                                        onClick={() => {
                                                            setSubmenuOpen(true)
                                                            setOptionnumber('0')
                                                            setItemoption(
                                                                submenu?.option0
                                                            )
                                                        }}
                                                    >
                                                        <MyIcon
                                                            {...(submenu
                                                                ?.option0
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(submenu
                                                                ?.option0
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(submenu
                                                                ?.option0
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                        />
                                                        Option 0
                                                    </Button>
                                                </View>
                                            </Flex>
                                        </View>
                                    </Flex>
                                )}

                                <Flex>
                                    <View>
                                        {' '}
                                        {menunumber === 'override' ||
                                        menunumber === 'afterhours' ||
                                        menunumber === 'secondary' ||
                                        menunumber ===
                                            'holidayoption' ? null : (
                                            <CheckboxField
                                                label="Default Route"
                                                name="defaultroute"
                                                checked={isdefault}
                                                onChange={(e) => {
                                                    setIsdefault(
                                                        e.target.checked
                                                    )
                                                }}
                                            />
                                        )}
                                    </View>
                                </Flex>
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
                                            setIsdefault(false)
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
