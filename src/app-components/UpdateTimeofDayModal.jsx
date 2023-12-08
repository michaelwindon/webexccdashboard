import {
    View,
    useTheme,
    Text,
    Flex,
    Button,
    Heading,
} from '@aws-amplify/ui-react'
import Dialog from '@mui/material/Dialog'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState, MouseEvent, useEffect } from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DataStore } from 'aws-amplify/datastore'
import { ContactCenterModel } from '../models'

const UpdateTimeofDayModal = (props) => {
    const { open, user, contactcenter, onClose } = props

    const getTimeAsDate = (timeString) => {
        const dateobj = dayjs()
            .set('hour', dayjs(timeString, 'h:mm A').hour())
            .set('minute', dayjs(timeString, 'h:mm A').minute())
        return dateobj
    }

    const { tokens } = useTheme()
    const [days, setDays] = useState(() => [])
    const [varMon, setVarMon] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[1]),
        closed: getTimeAsDate(contactcenter?.daystodclose[1]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[1]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[1]),
    })
    const [varTue, setVarTue] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[2]),
        closed: getTimeAsDate(contactcenter?.daystodclose[2]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[2]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[2]),
    })
    const [varWed, setVarWed] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[3]),
        closed: getTimeAsDate(contactcenter?.daystodclose[3]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[3]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[3]),
    })
    const [varThu, setVarThu] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[4]),
        closed: getTimeAsDate(contactcenter?.daystodclose[4]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[4]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[4]),
    })
    const [varFri, setVarFri] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[5]),
        closed: getTimeAsDate(contactcenter?.daystodclose[5]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[5]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[5]),
    })
    const [varSat, setVarSat] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[6]),
        closed: getTimeAsDate(contactcenter?.daystodclose[6]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[6]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[6]),
    })
    const [varSun, setVarSun] = useState({
        open: getTimeAsDate(contactcenter?.daystodopen[0]),
        closed: getTimeAsDate(contactcenter?.daystodclose[0]),
        secondaryopen: getTimeAsDate(contactcenter?.secondarytodopen[0]),
        secondaryclose: getTimeAsDate(contactcenter?.secondarytodclose[0]),
    })

    const handleChange = (event, newDays) => {
        setDays(newDays)
    }

    const handleSubmit = async () => {
        const orignal = await DataStore.query(
            ContactCenterModel,
            contactcenter.id
        )

        if (orignal) {
            try {
                const updateContactCenter = await DataStore.save(
                    ContactCenterModel.copyOf(orignal, (update) => {
                        update.daysopen = days
                        update.daystodopen = [
                            varSun?.open.format('h:mm A'),
                            varMon?.open.format('h:mm A'),
                            varTue?.open.format('h:mm A'),
                            varWed?.open.format('h:mm A'),
                            varThu?.open.format('h:mm A'),
                            varFri?.open.format('h:mm A'),
                            varSat?.open.format('h:mm A'),
                        ]
                        update.daystodclose = [
                            varSun?.closed.format('h:mm A'),
                            varMon?.closed.format('h:mm A'),
                            varTue?.closed.format('h:mm A'),
                            varWed?.closed.format('h:mm A'),
                            varThu?.closed.format('h:mm A'),
                            varFri?.closed.format('h:mm A'),
                            varSat?.closed.format('h:mm A'),
                        ]
                        update.secondarytodclose = [
                            varSun?.secondaryclose.format('h:mm A'),
                            varMon?.secondaryclose.format('h:mm A'),
                            varTue?.secondaryclose.format('h:mm A'),
                            varWed?.secondaryclose.format('h:mm A'),
                            varThu?.secondaryclose.format('h:mm A'),
                            varFri?.secondaryclose.format('h:mm A'),
                            varSat?.secondaryclose.format('h:mm A'),
                        ]

                        update.secondarytodopen = [
                            varSun?.secondaryopen.format('h:mm A'),
                            varMon?.secondaryopen.format('h:mm A'),
                            varTue?.secondaryopen.format('h:mm A'),
                            varWed?.secondaryopen.format('h:mm A'),
                            varThu?.secondaryopen.format('h:mm A'),
                            varFri?.secondaryopen.format('h:mm A'),
                            varSat?.secondaryopen.format('h:mm A'),
                        ]
                        update.updateduser = user.username
                    })
                )
                onClose()
                console.info(`Sucessfully DB Update:🚀:`)
            } catch (error) {}
        }
    }
    const handleTimeChange = (day, tod, time) => {
        const adjustedTime = getTimeAsDate(time)

        switch (day) {
            case 'MON':
                switch (tod) {
                    case 'open':
                        setVarMon({ ...varMon, open: adjustedTime })
                        break

                    case 'closed':
                        setVarMon({ ...varMon, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarMon({ ...varMon, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarMon({ ...varMon, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'TUE':
                switch (tod) {
                    case 'open':
                        setVarTue({ ...varTue, open: adjustedTime })
                        console.log('handleTimeChange:TUE')
                        break

                    case 'closed':
                        setVarTue({ ...varTue, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarTue({ ...varTue, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarTue({ ...varTue, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'WED':
                switch (tod) {
                    case 'open':
                        setVarWed({ ...varWed, open: adjustedTime })
                        break

                    case 'closed':
                        setVarWed({ ...varWed, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarWed({ ...varWed, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarWed({ ...varWed, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'THU':
                switch (tod) {
                    case 'open':
                        setVarThu({ ...varThu, open: adjustedTime })
                        break

                    case 'closed':
                        setVarThu({ ...varThu, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarThu({ ...varThu, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarThu({ ...varThu, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'FRI':
                switch (tod) {
                    case 'open':
                        setVarFri({ ...varFri, open: adjustedTime })
                        break

                    case 'closed':
                        setVarFri({ ...varFri, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarFri({ ...varFri, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarFri({ ...varFri, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'SAT':
                switch (tod) {
                    case 'open':
                        setVarSat({ ...varSat, open: adjustedTime })
                        break

                    case 'closed':
                        setVarSat({ ...varSat, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarSat({ ...varSat, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarSat({ ...varSat, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }
                break
            case 'SUN':
                switch (tod) {
                    case 'open':
                        setVarSun({ ...varSun, open: adjustedTime })
                        break

                    case 'closed':
                        setVarSun({ ...varSun, closed: adjustedTime })
                        break

                    case 'secondaryopen':
                        setVarSun({ ...varSun, secondaryopen: adjustedTime })
                        break

                    case 'secondaryclose':
                        setVarSun({ ...varSun, secondaryclose: adjustedTime })
                        break

                    default:
                        break
                }

            default:
                break
        }
    }

    useEffect(() => {
        if (contactcenter?.daysopen != undefined) {
            setDays(contactcenter.daysopen) //days to what is saved in the db

            //set local var with whats in the DB

            setVarMon({
                open: getTimeAsDate(contactcenter?.daystodopen[1]),
                closed: getTimeAsDate(contactcenter?.daystodclose[1]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[1]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[1]
                ),
            })

            setVarTue({
                open: getTimeAsDate(contactcenter?.daystodopen[2]),
                closed: getTimeAsDate(contactcenter?.daystodclose[2]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[2]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[2]
                ),
            })
            setVarWed({
                open: getTimeAsDate(contactcenter?.daystodopen[3]),
                closed: getTimeAsDate(contactcenter?.daystodclose[3]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[3]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[3]
                ),
            })
            setVarThu({
                open: getTimeAsDate(contactcenter?.daystodopen[4]),
                closed: getTimeAsDate(contactcenter?.daystodclose[4]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[4]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[4]
                ),
            })
            setVarFri({
                open: getTimeAsDate(contactcenter?.daystodopen[5]),
                closed: getTimeAsDate(contactcenter?.daystodclose[5]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[5]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[5]
                ),
            })
            setVarSat({
                open: getTimeAsDate(contactcenter?.daystodopen[6]),
                closed: getTimeAsDate(contactcenter?.daystodclose[6]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[6]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[6]
                ),
            })
            setVarSun({
                open: getTimeAsDate(contactcenter?.daystodopen[0]),
                closed: getTimeAsDate(contactcenter?.daystodclose[0]),
                secondaryopen: getTimeAsDate(
                    contactcenter?.secondarytodopen[0]
                ),
                secondaryclose: getTimeAsDate(
                    contactcenter?.secondarytodclose[0]
                ),
            })
        }
    }, [open])

    return (
        <Dialog fullWidth={true} maxWidth="lg" open={open}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Flex direction="row" justifyContent="flex-start" wrap="nowrap">
                    <View
                        backgroundColor={tokens.colors.background.secondary}
                        marginTop={tokens.space.xxl}
                        marginLeft={tokens.space.large}
                        marginBottom={tokens.space.large}
                        paddingTop={tokens.space.xxl}
                        paddingBottom={tokens.space.xxl}
                    >
                        <ToggleButtonGroup
                            value={days}
                            color="secondary"
                            onChange={handleChange}
                            orientation="vertical"
                            aria-label="Enable Days of the week"
                        >
                            <ToggleButton value="MON">MON</ToggleButton>
                            <ToggleButton value="TUE">TUE</ToggleButton>
                            <ToggleButton value="WED">WED</ToggleButton>
                            <ToggleButton value="THU">THU</ToggleButton>
                            <ToggleButton value="FRI">FRI</ToggleButton>
                            <ToggleButton value="SAT">SAT</ToggleButton>
                            <ToggleButton value="SUN">SUN</ToggleButton>
                        </ToggleButtonGroup>
                    </View>
                    <View
                        padding={tokens.space.medium}
                        backgroundColor={tokens.colors.background.secondary}
                        marginTop={tokens.space.large}
                        marginBottom={tokens.space.large}
                    >
                        <Flex direction="column">
                            <View
                                {...(!days.includes('MON') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> MON</Text>
                                    <TimePicker
                                        label="Open"
                                        value={varMon.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'MON',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varMon.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'MON',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varMon.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'MON',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varMon.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'MON',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                            <View
                                {...(!days.includes('TUE') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> TUE </Text>
                                    <TimePicker
                                        label="Open"
                                        value={varTue.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'TUE',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varTue.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'TUE',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varTue.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'TUE',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varTue.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'TUE',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>

                            <View
                                {...(!days.includes('WED') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> WED </Text>
                                    <TimePicker
                                        label="Open"
                                        value={varWed.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'WED',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varWed.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'WED',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varWed.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'WED',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varWed.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'WED',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                            <View
                                {...(!days.includes('THU') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> THU</Text>
                                    <TimePicker
                                        label="Open"
                                        value={varThu.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'THU',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varThu.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'THU',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varThu.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'THU',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varThu.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'THU',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                            <View
                                {...(!days.includes('FRI') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> FRI </Text>
                                    <TimePicker
                                        label="Open"
                                        value={varFri.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'FRI',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varFri.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'FRI',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varFri.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'FRI',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varFri.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'FRI',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                            <View
                                {...(!days.includes('SAT') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> SAT </Text>
                                    <TimePicker
                                        label="Open"
                                        value={varSat.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SAT',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varSat.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SAT',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varSat.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SAT',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varSat.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SAT',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                            <View
                                {...(!days.includes('SUN') && {
                                    hidden: 'hidden',
                                })}
                            >
                                <Flex alignItems="center" gap="0">
                                    <Text width="2.5em"> SUN </Text>
                                    <TimePicker
                                        label="Open"
                                        value={varSun.open}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SUN',
                                                'open',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Close"
                                        value={varSun.secondaryclose}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SUN',
                                                'secondaryclose',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="2nd Open"
                                        value={varSun.secondaryopen}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SUN',
                                                'secondaryopen',
                                                time
                                            )
                                        }}
                                    />
                                    <TimePicker
                                        label="Close"
                                        value={varSun.closed}
                                        onChange={(time) => {
                                            handleTimeChange(
                                                'SUN',
                                                'closed',
                                                time
                                            )
                                        }}
                                    />
                                </Flex>
                            </View>
                        </Flex>
                        <View paddingTop={tokens.space.large}>
                            <Flex justifyContent="center">
                                {days.length <= 0 && (
                                    <View padding={tokens.space.xxxl}>
                                        <Heading level={3}>
                                            Submitting without any Days selected
                                            will result in clearing Schedule
                                        </Heading>
                                    </View>
                                )}
                            </Flex>
                            <Flex alignContent="center" justifyContent="center">
                                <Button
                                    onClick={() => {
                                        onClose()
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variation="primary"
                                    onClick={() => {
                                        handleSubmit()
                                    }}
                                >
                                    Submit
                                </Button>
                            </Flex>
                        </View>
                    </View>
                </Flex>
            </LocalizationProvider>
        </Dialog>
    )
}
export default UpdateTimeofDayModal
