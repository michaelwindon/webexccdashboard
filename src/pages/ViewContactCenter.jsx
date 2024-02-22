import { useEffect, useState } from 'react'
import '@fontsource/inter/'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import { useTheme } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'

import { ContactCenterUICollection, MyIcon } from '../ui-components'
import { generateClient } from 'aws-amplify/api'
import * as queries from '../graphql/mycustomqueries'
import { useDataStoreBinding } from '../ui-components/utils'
import { ContactCenterModel } from '../models'
import UpdateisOverrideModal from '../app-components/UpdateisOverrideModal'
import UpdateMenuModal from '../app-components/UpdateMenuModal'
import DisplayCenterStatus from '../app-components/DisplayCenterStatus'
import UpdateTimeofDayModal from '../app-components/UpdateTimeofDayModal'
import ShowSpanishModal from '../app-components/ShowSpanishModal'
import UpdateWelcomeModal from '../app-components/UpdateWelcomeModal'
import UpdateTitleDetailsModal from '../app-components/UpdateTitleDetailsModal'

import {
    Loader,
    Flex,
    withAuthenticator,
    useAuthenticator,
} from '@aws-amplify/ui-react'

function ViewContactCenter() {
    const { user, signOut } = useAuthenticator()
    const theme = useTheme()

    const [opencctitledetails, setOpencctitledetails] = useState(false)

    const [openoverridemodal, setOpenOverrideModal] = useState(false)
    const [openwelcomeModal, setWelcomeModal] = useState(false)
    const [openupdatemenu, setOpenupdatemenu] = useState(false)
    const [openuOfDateTimeofDay, setOpenuOfDateTimeofDay] = useState(false)
    const [modelItem, setModelItem] = useState()
    const [menunumber, setMenuNumber] = useState()
    const [showSpanish, setShowSpanish] = useState(false)
    const [openSpanishModal, setOpenSpanishModal] = useState(false)
    const [contactcentermodel, setContactcentermodel] = useState()
    const [statusTrigger, setStatusTrigger] = useState({
        status: 'init',
        center: 'init',
    })
    const [id, setId] = useState()
    const [groupid, setGroupid] = useState()
    const [loading, setLoading] = useState(true)
    const [authorizedItems, setAuthorizedItems] = useState([])
    const gqlclient = generateClient()
    const itemsDataStore = useDataStoreBinding({
        type: 'collection',
        model: ContactCenterModel,
    }).items

    //using datastore collection models to get Items
    useEffect(() => {
        async function setItemsFromDataStore() {
            const userAttributes = await fetchUserAttributes()
            const customFilters = { listfilter: userAttributes.email } //get logged in user email

            //get user ID and Role
            var userRoleId = await gqlclient.graphql({
                query: queries.listManagerIdRoleQuery,
                variables: customFilters,
            })
            //use DataStore hook to get items comes with subscription for auto updates when data changes within the contact center model.
            var loaded = await Promise.all(
                itemsDataStore.map(async (item) => {
                    var managerArrary = await item.Managers.values
                    if (
                        managerArrary.some(
                            (obj) =>
                                obj.managerModelId ===
                                userRoleId.data.listManagerModels.items[0].id
                        ) ||
                        userRoleId.data.listManagerModels.items[0].role ===
                            'ADMIN'
                    ) {
                        return {
                            ...item,
                            AssignedGroup: await item.AssignedGroup,
                            Managers: await item.Managers.values,
                        }
                    } else {
                        return
                    }
                })
            )

            //remove undefined items that dont meet the filter
            const newValue = loaded.filter((d) => d != undefined)
            setAuthorizedItems(newValue)
            //clear loader
            setLoading(false)
        }
        setItemsFromDataStore()
    }, [itemsDataStore])

    useEffect(() => {
        //cause page to refresh on status change
    }, [statusTrigger, openuOfDateTimeofDay])

    const handleShowSpanish = (state) => {
        setShowSpanish(state)
    }
    const handleUpdateMenuModalOpen = (groupid, itemMenu, menu, item) => {
        setGroupid(groupid)
        setModelItem(itemMenu)
        setMenuNumber(menu)
        setOpenupdatemenu(true)
        setContactcentermodel(item)
    }
    const refreshContactCenterModal = (updatedContactCenterModel) => {
        setContactcentermodel(updatedContactCenterModel)
    }

    const handleUpdateMenuModaclose = (groupid) => {
        setGroupid(null)
        setOpenupdatemenu(false)
    }

    const handleClickWelcomePrompt = (item) => {
        setContactcentermodel(item)
        setWelcomeModal(true)
    }

    const handleClickOverrideModalOpen = (id) => {
        setOpenOverrideModal(true)
        setId(id)
    }
    const handleClickOverrideModalClose = () => {
        setOpenOverrideModal(false)
        setId(null)
    }
    const handleUpdateTimeofDayModalclose = () => {
        setOpenuOfDateTimeofDay(false)
        setContactcentermodel(null)
    }
    const handleUpdateTimeofDayModalOpen = (item) => {
        setContactcentermodel(item)
        setOpenuOfDateTimeofDay(true)
    }
    const handleUpdateContactCenterTitleDetailsOpen = (item) => {
        setId(item.id)
        setOpencctitledetails(true)
    }
    const handleUpdateContactCenterTitleDetailsClose = () => {
        setOpencctitledetails(false)
        setId(null)
    }

    return (
        <>
            {loading ? (
                <Flex justifyContent="center" padding="20%">
                    <Loader height="20%" width="20%" />
                </Flex>
            ) : (
                <>
                    <UpdateTitleDetailsModal
                        open={opencctitledetails}
                        onClose={handleUpdateContactCenterTitleDetailsClose}
                        id={id}
                        user={user}
                    />

                    <UpdateWelcomeModal
                        open={openwelcomeModal}
                        onClose={setWelcomeModal}
                        contactcenter={contactcentermodel}
                        user={user}
                    />
                    <ShowSpanishModal
                        open={openSpanishModal}
                        onClose={setOpenSpanishModal}
                        showSpanish={showSpanish}
                        handleShowSpanish={handleShowSpanish}
                    />

                    <UpdateTimeofDayModal
                        open={openuOfDateTimeofDay}
                        user={user}
                        onClose={handleUpdateTimeofDayModalclose}
                        contactcenter={contactcentermodel}
                    />
                    <UpdateMenuModal
                        groupid={groupid}
                        onClose={handleUpdateMenuModaclose}
                        open={openupdatemenu}
                        item={modelItem}
                        menunumber={menunumber}
                        contactcenter={contactcentermodel}
                        user={user}
                        showSpanish={showSpanish}
                        refreshContactCenterModal={refreshContactCenterModal}
                    />
                    <UpdateisOverrideModal
                        open={openoverridemodal}
                        id={id}
                        onClose={handleClickOverrideModalClose}
                        user={user}
                        setShowSpanish={setShowSpanish}
                    />
                    <Flex padding="25px" justifyContent="center">
                        <ContactCenterUICollection
                            items={authorizedItems}
                            overrideItems={({ item, index }) => ({
                                overrides: {
                                    welcomepromptsec: {
                                        className: 'clickAble',
                                        onClick: () => {
                                            handleClickWelcomePrompt(item)
                                        },
                                    },
                                    todsec: {
                                        className: 'clickAble',
                                        onClick: () => {
                                            handleUpdateTimeofDayModalOpen(item)
                                        },
                                    },
                                    openArray1: {
                                        children: (
                                            <>
                                                {item?.daystodopen[1] == '' ||
                                                item?.daystodopen[1] ==
                                                    'Invalid Date' ||
                                                item?.daystodopen[1] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item?.daystodopen[1]}
                                            </>
                                        ),
                                    },
                                    openArray2: {
                                        children: (
                                            <>
                                                {item?.daystodopen[2] == '' ||
                                                item?.daystodopen[2] ==
                                                    'Invalid Date' ||
                                                item?.daystodopen[2] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item?.daystodopen[2]}
                                            </>
                                        ),
                                    },
                                    openArray3: {
                                        children: (
                                            <>
                                                {item.daystodopen[3] == '' ||
                                                item.daystodopen[3] ==
                                                    'Invalid Date' ||
                                                item.daystodopen[3] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodopen[3]}
                                            </>
                                        ),
                                    },
                                    openArray4: {
                                        children: (
                                            <>
                                                {item.daystodopen[4] == '' ||
                                                item.daystodopen[4] ==
                                                    'Invalid Date' ||
                                                item.daystodopen[4] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodopen[4]}
                                            </>
                                        ),
                                    },
                                    openArray5: {
                                        children: (
                                            <>
                                                {item.daystodopen[5] == '' ||
                                                item.daystodopen[5] ==
                                                    'Invalid Date' ||
                                                item.daystodopen[5] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodopen[5]}
                                            </>
                                        ),
                                    },
                                    openArray6: {
                                        children: (
                                            <>
                                                {item.daystodopen[6] == '' ||
                                                item.daystodopen[6] ==
                                                    'Invalid Date' ||
                                                item.daystodopen[6] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodopen[6]}
                                            </>
                                        ),
                                    },
                                    openArray0: {
                                        children: (
                                            <>
                                                {item.daystodopen[0] == '' ||
                                                item.daystodopen[0] ==
                                                    'Invalid Date' ||
                                                item.daystodopen[0] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodopen[0]}
                                            </>
                                        ),
                                    },
                                    closeArray1: {
                                        children: (
                                            <>
                                                {item.daystodclose[1] == '' ||
                                                item.daystodclose[1] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[1] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[1]}
                                            </>
                                        ),
                                    },
                                    closeArray2: {
                                        children: (
                                            <>
                                                {item.daystodclose[2] == '' ||
                                                item.daystodclose[2] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[2] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[2]}
                                            </>
                                        ),
                                    },
                                    closeArray3: {
                                        children: (
                                            <>
                                                {item.daystodclose[3] == '' ||
                                                item.daystodclose[3] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[3] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[3]}
                                            </>
                                        ),
                                    },
                                    closeArray4: {
                                        children: (
                                            <>
                                                {item.daystodclose[4] == '' ||
                                                item.daystodclose[4] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[4] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[4]}
                                            </>
                                        ),
                                    },
                                    closeArray5: {
                                        children: (
                                            <>
                                                {item.daystodclose[5] == '' ||
                                                item.daystodclose[5] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[5] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[5]}
                                            </>
                                        ),
                                    },
                                    closeArray6: {
                                        children: (
                                            <>
                                                {item.daystodclose[6] == '' ||
                                                item.daystodclose[6] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[6] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[6]}
                                            </>
                                        ),
                                    },
                                    closeArray0: {
                                        children: (
                                            <>
                                                {item.daystodclose[0] == '' ||
                                                item.daystodclose[0] ==
                                                    'Invalid Date' ||
                                                item.daystodclose[0] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.daystodclose[0]}
                                            </>
                                        ),
                                    },
                                    secopenArray1: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[1] ===
                                                    '' ||
                                                item.secondarytodopen[1] ===
                                                    'Invalid Date' ||
                                                item.secondarytodopen[1] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[1]}
                                            </>
                                        ),
                                    },
                                    secopenArray2: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[2] ==
                                                    '' ||
                                                item.secondarytodopen[2] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[2] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[2]}
                                            </>
                                        ),
                                    },
                                    secopenArray3: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[3] ==
                                                    '' ||
                                                item.secondarytodopen[3] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[3] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[3]}
                                            </>
                                        ),
                                    },
                                    secopenArray4: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[4] ==
                                                    '' ||
                                                item.secondarytodopen[4] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[4] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[4]}
                                            </>
                                        ),
                                    },
                                    secopenArray5: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[5] ==
                                                    '' ||
                                                item.secondarytodopen[5] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[5] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[5]}
                                            </>
                                        ),
                                    },
                                    secopenArray6: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[6] ==
                                                    '' ||
                                                item.secondarytodopen[6] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[6] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[6]}
                                            </>
                                        ),
                                    },
                                    secopenArray0: {
                                        children: (
                                            <>
                                                {item.secondarytodopen[0] ==
                                                    '' ||
                                                item.secondarytodopen[0] ==
                                                    'Invalid Date' ||
                                                item.secondarytodopen[0] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodopen[0]}
                                            </>
                                        ),
                                    },
                                    seccloseArray1: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[1] ==
                                                    '' ||
                                                item.secondarytodclose[1] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[1] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[1]}
                                            </>
                                        ),
                                    },
                                    seccloseArray2: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[2] ==
                                                    '' ||
                                                item.secondarytodclose[2] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[2] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[2]}
                                            </>
                                        ),
                                    },
                                    seccloseArray3: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[3] ==
                                                    '' ||
                                                item.secondarytodclose[3] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[3] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[3]}
                                            </>
                                        ),
                                    },
                                    seccloseArray4: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[4] ==
                                                    '' ||
                                                item.secondarytodclose[4] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[4] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[4]}
                                            </>
                                        ),
                                    },
                                    seccloseArray5: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[5] ==
                                                    '' ||
                                                item.secondarytodclose[5] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[5] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[5]}
                                            </>
                                        ),
                                    },
                                    seccloseArray6: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[6] ==
                                                    '' ||
                                                item.secondarytodclose[6] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[6] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[6]}
                                            </>
                                        ),
                                    },
                                    seccloseArray0: {
                                        children: (
                                            <>
                                                {item.secondarytodclose[0] ==
                                                    '' ||
                                                item.secondarytodclose[0] ==
                                                    'Invalid Date' ||
                                                item.secondarytodclose[0] ===
                                                    undefined
                                                    ? 'NA'
                                                    : item.secondarytodclose[0]}
                                            </>
                                        ),
                                    },
                                    dayyArray1: {
                                        //Mon
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Mon'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Mon'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('MON') >=
                                                0
                                                    ? 'MON'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray2: {
                                        //Tue
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Tue'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Tue'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('TUE') >=
                                                0
                                                    ? 'TUE'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray3: {
                                        //Wed
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Wed'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Wed'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',

                                        children: (
                                            <>
                                                {item.daysopen.indexOf('WED') >=
                                                0
                                                    ? 'WED'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray4: {
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Thu'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Thu'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('THU') >=
                                                0
                                                    ? 'THU'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray5: {
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Fri'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Fri'
                                                ? '{var(--amplify-font-weights-bold)}'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('FRI') >=
                                                0
                                                    ? 'FRI'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray6: {
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Sat'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Sat'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('SAT') >=
                                                0
                                                    ? 'SAT'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    dayyArray0: {
                                        backgroundColor:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Sun'
                                                ? 'var(--amplify-colors-primary-40)'
                                                : '',
                                        fontWeight:
                                            new Date().toLocaleString('en-US', {
                                                weekday: 'short',
                                            }) == 'Sun'
                                                ? 'var(--amplify-font-weights-bold)'
                                                : '',
                                        children: (
                                            <>
                                                {item.daysopen.indexOf('SUN') >=
                                                0
                                                    ? 'SUN'
                                                    : 'CLOSE'}
                                            </>
                                        ),
                                    },
                                    currentstatsvalue: {
                                        children: (
                                            <DisplayCenterStatus
                                                contactcenter={item}
                                                onStatusChange={
                                                    setStatusTrigger
                                                }
                                            />
                                        ),
                                    },
                                    ccname: {
                                        className: 'clickAble',
                                        onClick: () => {
                                            handleUpdateContactCenterTitleDetailsOpen(
                                                item
                                            )
                                        },
                                    },
                                    ccmainnumber: {
                                        className: item?.presentlangoption
                                            ? 'clickAble'
                                            : '',
                                        onClick: () => {
                                            if (item?.presentlangoption) {
                                                setOpenSpanishModal(true)
                                            } else {
                                                setOpenSpanishModal(false)
                                            }
                                        },
                                        children: (
                                            <>
                                                {item?.mainnumber.replace(
                                                    /^(\d{3})(\d{3})(\d{4})/,
                                                    '($1) $2-$3'
                                                )}
                                                {item?.presentlangoption &&
                                                    ' [ES]'}
                                            </>
                                        ),
                                    },
                                    ButtonOne: {
                                        ...(item?.defaultroute === '1'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu1,
                                                    '1',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu1_sp,
                                                    '1',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                1
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu1
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu1
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu1
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu1
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />

                                                        <span class="tooltiptext">
                                                            {item.menu1?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu1_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu1_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu1_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu1_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu1?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    spanishMenu: {
                                        children: (
                                            <>
                                                {showSpanish &&
                                                item?.presentlangoption
                                                    ? 'Spanish Menu Displayed'
                                                    : ''}
                                            </>
                                        ),
                                    },
                                    ButtonTwo: {
                                        ...(item?.defaultroute === '2'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu2,
                                                    '2',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu2_sp,
                                                    '2',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                2
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu2
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu2
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu2
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu2
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu2?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu2_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu2_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu2_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu2_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu2?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonThree: {
                                        ...(item?.defaultroute === '3'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu3,
                                                    '3',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu3_sp,
                                                    '3',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                3
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu3
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu3
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu3
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu3
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu3?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu3_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu3_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu3_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu3_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu3?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonFour: {
                                        ...(item?.defaultroute === '4'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu4,
                                                    '4',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu4_sp,
                                                    '4',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                4
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu4
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu4
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu4
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu4
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu4?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu4_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu4_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu4_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu4_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu4?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonFive: {
                                        ...(item?.defaultroute === '5'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu5,
                                                    '5',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu5_sp,
                                                    '5',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                5
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu5
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu5
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu5
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu5
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu5?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu5_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu5_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu5_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu5_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu5?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonSix: {
                                        ...(item?.defaultroute === '6'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu6,
                                                    '6',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu6_sp,
                                                    '6',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                6
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu6
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu6
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu6
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu6
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu6?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu6_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu6_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu6_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu6_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu6?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonSeven: {
                                        ...(item?.defaultroute === '7'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu7,
                                                    '7',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu7_sp,
                                                    '7',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                7
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu7
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu7
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu7
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu7
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu7?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu7_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu7_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu7_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu7_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu7?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonEight: {
                                        ...(item?.defaultroute === '8'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu8,
                                                    '8',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu8_sp,
                                                    '8',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                8
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu8
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu8
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu8
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu8
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu8?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu8_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu8_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu8_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu8_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu8?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonNine: {
                                        ...(item?.defaultroute === '9'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu9,
                                                    '9',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu9_sp,
                                                    '9',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                9
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu9
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu9
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu9
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu9
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu9?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu9_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu9_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu9_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu9_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu9?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    ButtonZero: {
                                        ...(item?.defaultroute === '0'
                                            ? {
                                                  variation: 'primary',
                                                  colorTheme: 'info',
                                              }
                                            : {}),
                                        onClick: () => {
                                            if (
                                                !showSpanish ||
                                                !item?.presentlangoption
                                            ) {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu0,
                                                    '0',
                                                    item
                                                )
                                            } else {
                                                handleUpdateMenuModalOpen(
                                                    item?.contactCenterModelAssignedGroupId,
                                                    item?.menu0_sp,
                                                    '0',
                                                    item
                                                )
                                            }
                                        },
                                        children: (
                                            <>
                                                0
                                                {!showSpanish ||
                                                !item?.presentlangoption ? (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu0
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu0
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu0
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu0
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu0?.value}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div class="tooltip">
                                                        <MyIcon
                                                            {...(item.menu0_sp
                                                                ?.type ==
                                                                'FORWARD' && {
                                                                type: 'phone',
                                                            })}
                                                            {...(item.menu0_sp
                                                                ?.type ==
                                                                'MSG' && {
                                                                type: 'chat',
                                                            })}
                                                            {...(item.menu0_sp
                                                                ?.type ==
                                                                'QUEUE' && {
                                                                type: 'group',
                                                            })}
                                                            {...(item.menu0_sp
                                                                ?.type ==
                                                                'SUBMENU' && {
                                                                type: 'share',
                                                            })}
                                                        />
                                                        <span class="tooltiptext">
                                                            {item.menu0?.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ),
                                    },
                                    SwitchField: {
                                        label: 'Overide/Holiday',
                                        onClick: () => {
                                            handleClickOverrideModalOpen(
                                                item.id
                                            )
                                        },
                                    },
                                    ButtonOverride: {
                                        onClick: () => {
                                            handleUpdateMenuModalOpen(
                                                item?.contactCenterModelAssignedGroupId,
                                                item?.override,
                                                'override',
                                                item
                                            )
                                        },
                                        children: (
                                            <>
                                                Override
                                                <div class="tooltip">
                                                <MyIcon
                                                    {...(item.override?.type ==
                                                        'FORWARD' && {
                                                        type: 'phone',
                                                    })}
                                                    {...(item.override?.type ==
                                                        'MSG' && {
                                                        type: 'chat',
                                                    })}
                                                    {...(item.override?.type ==
                                                        'QUEUE' && {
                                                        type: 'group',
                                                    })}
                                                    {...(item.override?.type ==
                                                        'SUBMENU' && {
                                                        type: 'share',
                                                    })}
                                                />
                                                 <span class="tooltiptext">
                                                            {item.menu0?.value}
                                                        </span>
                                                    </div>
                                            </>
                                        ),
                                    },
                                    ButtonAfterhours: {
                                        onClick: () => {
                                            handleUpdateMenuModalOpen(
                                                item?.contactCenterModelAssignedGroupId,
                                                item?.afterhours,
                                                'afterhours',
                                                item
                                            )
                                        },
                                        children: (
                                            <>
                                                Afterhours
                                                <MyIcon
                                                    {...(item.afterhours
                                                        ?.type == 'FORWARD' && {
                                                        type: 'phone',
                                                    })}
                                                    {...(item.afterhours
                                                        ?.type == 'MSG' && {
                                                        type: 'chat',
                                                    })}
                                                    {...(item.afterhours
                                                        ?.type == 'QUEUE' && {
                                                        type: 'group',
                                                    })}
                                                    {...(item.afterhours
                                                        ?.type == 'SUBMENU' && {
                                                        type: 'share',
                                                    })}
                                                />
                                            </>
                                        ),
                                    },
                                    ButtonSecondary: {
                                        onClick: () => {
                                            handleUpdateMenuModalOpen(
                                                item?.contactCenterModelAssignedGroupId,
                                                item?.secondaryclose,
                                                'secondary',
                                                item
                                            )
                                        },
                                        children: (
                                            <>
                                                Secondary
                                                <MyIcon
                                                    {...(item.secondaryclose
                                                        ?.type == 'FORWARD' && {
                                                        type: 'phone',
                                                    })}
                                                    {...(item.secondaryclose
                                                        ?.type == 'MSG' && {
                                                        type: 'chat',
                                                    })}
                                                    {...(item.secondaryclose
                                                        ?.type == 'QUEUE' && {
                                                        type: 'group',
                                                    })}
                                                    {...(item.secondaryclose
                                                        ?.type == 'SUBMENU' && {
                                                        type: 'share',
                                                    })}
                                                />
                                            </>
                                        ),
                                    },
                                    ButtonHoliday: {
                                        onClick: () => {
                                            handleUpdateMenuModalOpen(
                                                item?.contactCenterModelAssignedGroupId,
                                                item?.holidayoption,
                                                'holidayoption',
                                                item
                                            )
                                        },
                                        children: (
                                            <>
                                                Holiday
                                                <MyIcon
                                                    {...(item.holidayoption
                                                        ?.type == 'FORWARD' && {
                                                        type: 'phone',
                                                    })}
                                                    {...(item.holidayoption
                                                        ?.type == 'MSG' && {
                                                        type: 'chat',
                                                    })}
                                                    {...(item.holidayoption
                                                        ?.type == 'QUEUE' && {
                                                        type: 'group',
                                                    })}
                                                    {...(item.holidayoption
                                                        ?.type == 'SUBMENU' && {
                                                        type: 'share',
                                                    })}
                                                />
                                            </>
                                        ),
                                    },
                                    lastupdate: {
                                        children: dayjs(item.updatedAt).format(
                                            'LLLL'
                                        ),
                                    },
                                },
                            })}
                        />
                    </Flex>
                </>
            )}
        </>
    )
}
ViewContactCenter.propTypes = {
    signOut: PropTypes.func,
    user: PropTypes.object,
}

export default withAuthenticator(ViewContactCenter)
