import { useEffect, useState } from 'react'
import '@fontsource/inter/'
import { Hub } from 'aws-amplify/utils'

import { Button } from '@aws-amplify/ui-react'

import { ContactCenterUICollection, MyIcon } from './ui-components'

import UpdateisOverrideModal from './app-components/UpdateisOverrideModal'
import UpdateMenuModal from './app-components/UpdateMenuModal'

function App() {
    const [openoverridemodal, setOpenOverrideModal] = useState(false)
    const [openupdatemenu, setOpenupdatemenu] = useState(false)
    const [modelItem, setModelItem] = useState()

    const [id, setId] = useState()
    const [groupid, setGroupid] = useState()

    const handleUpdateMenuModalOpen = (groupid, itemMenu) => {
        setGroupid(groupid)
        setModelItem(itemMenu)
        setOpenupdatemenu(true)
    }
    const handleUpdateMenuModaclose = (groupid) => {
        setGroupid(null)
        setOpenupdatemenu(false)
    }

    const handleClickOverrideModalOpen = (id) => {
        setOpenOverrideModal(true)
        setId(id)
    }
    const handleClickOverrideModalClose = () => {
        setOpenOverrideModal(false)
        setId(null)
    }

    return (
        <>
            <UpdateMenuModal
                groupid={groupid}
                onClose={handleUpdateMenuModaclose}
                open={openupdatemenu}
                item={modelItem}
            />
            <UpdateisOverrideModal
                open={openoverridemodal}
                id={id}
                onClose={handleClickOverrideModalClose}
            />
            <ContactCenterUICollection
                overrideItems={({ item, index }) => ({
                    overrides: {
                        ccmainnumber: {
                            children: (
                                <>
                                    {item?.mainnumber.replace(
                                        /^(\d{3})(\d{3})(\d{4})/,
                                        '($1) $2-$3'
                                    )}
                                </>
                            ),
                        },
                        ButtonOne: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu1
                                )
                            },
                            children: (
                                <>
                                    1
                                    <MyIcon
                                        {...(item.menu1?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu1?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu1?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu1?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonTwo: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu2
                                )
                            },
                            children: (
                                <>
                                    2
                                    <MyIcon
                                        {...(item.menu2?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu2?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu2?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu2?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonThree: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu3
                                )
                            },
                            children: (
                                <>
                                    3
                                    <MyIcon
                                        {...(item.menu3?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu3?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu3?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu3?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonFour: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu4
                                )
                            },
                            children: (
                                <>
                                    4
                                    <MyIcon
                                        {...(item.menu4?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu4?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu4?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu4?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonFive: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu5
                                )
                            },
                            children: (
                                <>
                                    5
                                    <MyIcon
                                        {...(item.menu5?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu5?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu5?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu5?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonSix: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu6
                                )
                            },
                            children: (
                                <>
                                    6
                                    <MyIcon
                                        {...(item.menu6?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu6?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu6?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu6?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonSeven: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu7
                                )
                            },
                            children: (
                                <>
                                    7
                                    <MyIcon
                                        {...(item.menu7?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu7?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu7?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu7?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonEight: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu8
                                )
                            },
                            children: (
                                <>
                                    8
                                    <MyIcon
                                        {...(item.menu8?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu8?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu8?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu8?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonNine: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu9
                                )
                            },
                            children: (
                                <>
                                    9
                                    <MyIcon
                                        {...(item.menu9?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu9?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu9?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu9?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        ButtonZero: {
                            onClick: () => {
                                handleUpdateMenuModalOpen(
                                    item?.contactCenterModelAssignedGroupId,
                                    item?.menu0
                                )
                            },
                            children: (
                                <>
                                    0
                                    <MyIcon
                                        {...(item.menu0?.type == 'FORWARD' && {
                                            type: 'phone',
                                        })}
                                        {...(item.menu0?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.menu0?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.menu0?.type == 'SUBMENU' && {
                                            type: 'share',
                                        })}
                                    />
                                </>
                            ),
                        },
                        SwitchField: {
                            onClick: () => {
                                handleClickOverrideModalOpen(item.id)
                            },
                        },
                        ButtonOverride: {
                            children: (
                                <>
                                    {' '}
                                    Override
                                    <MyIcon
                                        {...(item.override?.type ==
                                            'FORWARD' && { type: 'phone' })}
                                        {...(item.override?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.override?.type == 'QUEUE' && {
                                            type: 'group',
                                        })}
                                        {...(item.override?.type ==
                                            'SUBMENU' && { type: 'share' })}
                                    />
                                </>
                            ),
                        },
                        ButtonAfterhours: {
                            children: (
                                <>
                                    {' '}
                                    Afterhours
                                    <MyIcon
                                        {...(item.afterhours?.type ==
                                            'FORWARD' && { type: 'phone' })}
                                        {...(item.afterhours?.type == 'MSG' && {
                                            type: 'chat',
                                        })}
                                        {...(item.afterhours?.type ==
                                            'QUEUE' && { type: 'group' })}
                                        {...(item.afterhours?.type ==
                                            'SUBMENU' && { type: 'share' })}
                                    />
                                </>
                            ),
                        },
                        ButtonHoliday: {
                            children: (
                                <>
                                    {' '}
                                    Holiday
                                    <MyIcon
                                        {...(item.holidayoption?.type ==
                                            'FORWARD' && { type: 'phone' })}
                                        {...(item.holidayoption?.type ==
                                            'MSG' && { type: 'chat' })}
                                        {...(item.holidayoption?.type ==
                                            'QUEUE' && { type: 'group' })}
                                        {...(item.holidayoption?.type ==
                                            'SUBMENU' && { type: 'share' })}
                                    />
                                </>
                            ),
                        },
                    },
                })}
            />
        </>
    )
}

export default App
