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

const UpdateSubmenuModal = (props) => {
    const { tokens } = useTheme()
    const {
        onClose,
        groupid,
        open,
        optionnumber,
        contactcenter,
        user,
        itemoption,
        menunumber,
        refreshContactCenterModal,
    } = props

    const [showSubmenuQueue, setShowSubmenuQueue] = useState(false)
    const [showSubmenuForward, setShowSubmenuForward] = useState(false)
    const [showSubmenuMessage, setShowSubmenuMessage] = useState(false)
    const [queues, setQueues] = useState([])
    const [menuType, setmenuType] = useState('')
    const [fieldValue, setfieldValue] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                if (open) {
                    const data = await DataStore.query(QueueModel, (q) =>
                        q.queueModelGroupId.eq(groupid)
                    )
                    setQueues(data)
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
            optionnumber == '' ? fetchDatawithoutrestrictions() : fetchData()
        }
    }, [open])

    const handleSubmit = async () => {
        const updatedMenu = { type: menuType, value: fieldValue }

        const orignal = await DataStore.query(
            ContactCenterModel,
            contactcenter.id
        )

        if (orignal) {
            try {
                const updateContactCenter = await DataStore.save(
                    ContactCenterModel.copyOf(orignal, (update) => {
                        switch (optionnumber) {
                            case '1':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option1: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '2':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option2: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '3':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option3: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '4':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option4: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '5':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option5: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '6':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option6: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '7':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option7: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '8':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option8: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                            case '9':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option9: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                break
                            case '0':
                                if (menunumber == '1') {
                                    update.submenu1 = {
                                        ...update.submenu1,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '2') {
                                    update.submenu2 = {
                                        ...update.submenu2,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '3') {
                                    update.submenu3 = {
                                        ...update.submenu3,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '4') {
                                    update.submenu4 = {
                                        ...update.submenu4,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '5') {
                                    update.submenu5 = {
                                        ...update.submenu5,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '6') {
                                    update.submenu6 = {
                                        ...update.submenu6,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '7') {
                                    update.submenu7 = {
                                        ...update.submenu7,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '8') {
                                    update.submenu8 = {
                                        ...update.submenu8,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '9') {
                                    update.submenu9 = {
                                        ...update.submenu9,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }
                                if (menunumber == '0') {
                                    update.submenu0 = {
                                        ...update.submenu0,
                                        option0: updatedMenu,
                                    }
                                    update.updateduser = user.username

                                    break
                                }

                            default:
                                console.error(
                                    `Error in UpdateSubmenuModal:handleSubmit: No Updates made as no menu number was given!`
                                )
                                break
                        }
                    })
                )
                //update the modal to update the submenu button options.
                refreshContactCenterModal(updateContactCenter)
            } catch (error) {
                console.error(`Error in handleSubmit: ${error}`)
            }
        }

        //clear and reset form after submition
        setmenuType('')
        setShowSubmenuForward(false)
        setShowSubmenuMessage(false)
        setShowSubmenuQueue(false)
        setfieldValue('')
        onClose(false)
    }
    const handleFieldChange = (e) => {
        setfieldValue(e.target.value)
    }
    const toggleSubmenuQueue = () => {
        setShowSubmenuQueue(!showSubmenuQueue)
        if (!showSubmenuQueue && itemoption?.type == 'QUEUE') {
            setfieldValue(itemoption.value)
        } else {
            setfieldValue('')
        }
        setShowSubmenuForward(false)
        setShowSubmenuMessage(false)
    }
    const toggleSubmenuForward = () => {
        setShowSubmenuForward(!showSubmenuForward)
        if (!showSubmenuForward && itemoption?.type == 'FORWARD') {
            setfieldValue(itemoption.value)
        } else {
            setfieldValue('')
        }
        setShowSubmenuMessage(false)
        setShowSubmenuQueue(false)
    }
    const toggleSubmenuMessge = () => {
        setShowSubmenuMessage(!showSubmenuMessage)

        if (!showSubmenuMessage && itemoption?.type == 'MSG') {
            setfieldValue(itemoption.value)
        } else {
            setfieldValue('')
        }
        setShowSubmenuQueue(false)
        setShowSubmenuForward(false)
    }

    return (
        <Dialog maxWidth="lg" open={open}>
            <View padding={tokens.space.medium}>
                <Flex direction="column">
                    <Flex direction="row" alignItems="flex-start">
                        <MyIcon
                            {...(itemoption?.type == 'FORWARD' && {
                                type: 'phone',
                            })}
                            {...(itemoption?.type == 'MSG' && {
                                type: 'chat',
                            })}
                            {...(itemoption?.type == 'QUEUE' && {
                                type: 'group',
                            })}
                            height="300px"
                            width="25%"
                        />
                        <Flex direction="column">
                            <Heading level={3}>Sub Menu Type</Heading>
                            <Flex direction="row" alignItems="flex-start">
                                <ButtonGroup>
                                    <Button
                                        onClick={() => {
                                            toggleSubmenuMessge()
                                            setmenuType('MSG')
                                        }}
                                    >
                                        <MyIcon type="chat" /> Message
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            toggleSubmenuForward()
                                            setmenuType('FORWARD')
                                        }}
                                    >
                                        <MyIcon type="phone" /> Forward
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            toggleSubmenuQueue()
                                            setmenuType('QUEUE')
                                        }}
                                    >
                                        <MyIcon type="group" /> Queue
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setmenuType('')
                                        }}
                                    >
                                        <MyIcon type="" /> Reset
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                            {showSubmenuMessage && (
                                <Flex>
                                    <View width="50em">
                                        <TextAreaField
                                            rows={3}
                                            onChange={handleFieldChange}
                                            name="menu_msg"
                                            label="Play Message"
                                            defaultValue={
                                                itemoption?.type === 'MSG'
                                                    ? itemoption?.value
                                                    : ''
                                            }
                                        />
                                    </View>
                                </Flex>
                            )}
                            {showSubmenuForward && (
                                <Flex>
                                    <TextField
                                        name="menu_forward"
                                        label="Forward Number"
                                        onChange={handleFieldChange}
                                        defaultValue={
                                            itemoption?.type === 'FORWARD'
                                                ? itemoption?.value
                                                : ''
                                        }
                                    />
                                </Flex>
                            )}
                            {showSubmenuQueue && (
                                <Flex>
                                    <SelectField
                                        name="menu_queue"
                                        label="Choose Queue"
                                        onChange={handleFieldChange}
                                        defaultValue={
                                            itemoption?.type === 'QUEUE'
                                                ? itemoption?.value
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
                            <Flex>
                                <View>
                                    <Button
                                        onClick={() => {
                                            setmenuType('')
                                            setShowSubmenuForward(false)
                                            setShowSubmenuMessage(false)
                                            setShowSubmenuQueue(false)
                                            setfieldValue('')
                                            onClose(false)
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </View>
                                <View>
                                    <Button onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </View>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </View>
        </Dialog>
    )
}
export default UpdateSubmenuModal
