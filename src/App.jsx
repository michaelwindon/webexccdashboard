import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    Loader,
    Text,
    Flex,
    useTheme,
    withAuthenticator,
} from '@aws-amplify/ui-react'
import Navbar from './app-components/Navbar'
import ViewContactCenter from './pages/ViewContactCenter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QueueManagement from './pages/QueueManagement'
import Annoucements from './pages/Annoucements'
import UserProfile from './pages/UserProfile'
import Training from './pages/Training'
import UserManagement from './pages/UserManagement'
import CreateContactCenter from './pages/CreateContactCenter'
import { DataStore } from 'aws-amplify/datastore'
import ErrorPage from './app-components/ErrorPage'
import Administration from './pages/Administration'

import {
    useDataStoreBinding,
    createDataStorePredicate,
} from './ui-components/utils'

import { ManagerModel } from './models'
import PermissionDenied from './pages/PermissionDenied'

function App({ signOut, user }) {
    const theme = useTheme()
    const handleSignout = () => {
        DataStore.clear()
        signOut()
    }
    const itemsFilterObj = {
        field: 'ManagerModel.email',
        operand: user.username,
        operator: 'eq',
    }

    const itemsFilter = createDataStorePredicate(itemsFilterObj)
    const { isLoading, items } = useDataStoreBinding({
        type: 'collection',
        model: ManagerModel,
        criteria: itemsFilter,
    })

    const [userRole, setUserRole] = useState(null)

    useEffect(() => {
        if (!isLoading) {
            setUserRole(items[0]?.role)
        }
    }, [items, isLoading])

    return (
        <>
            <Router>
                <Navbar signOut={handleSignout} user={user} />
                <Routes>
                    <Route
                        path="/admin/:ccid?"
                        element={
                            isLoading ? (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            ) : userRole ? (
                                userRole == 'ADMIN' ? (
                                    <Administration />
                                ) : (
                                    <PermissionDenied path="/admin" />
                                )
                            ) : (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            )
                        }
                    />
                    <Route
                        path="/"
                        exact
                        element={
                            <ViewContactCenter
                                signOut={handleSignout}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path="/addcontactcenter"
                        element={
                            isLoading ? (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            ) : userRole ? (
                                userRole == 'ADMIN' ? (
                                    <CreateContactCenter />
                                ) : (
                                    <PermissionDenied path="/admin" />
                                )
                            ) : (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            )
                        }
                    />
                    <Route
                        path="/usermanagement"
                        element={
                            isLoading ? (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            ) : userRole ? (
                                userRole == 'ADMIN' ? (
                                    <UserManagement />
                                ) : (
                                    <PermissionDenied path="/admin" />
                                )
                            ) : (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            )
                        }
                    />
                    <Route
                        path="/queuemanagement"
                        element={
                            isLoading ? (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            ) : userRole ? (
                                userRole == 'ADMIN' ? (
                                    <QueueManagement />
                                ) : (
                                    <PermissionDenied path="/admin" />
                                )
                            ) : (
                                <Flex justifyContent="center" padding="20%">
                                    <Loader height="20%" width="20%" />
                                </Flex>
                            )
                        }
                    />
                    <Route path="/annoucements" element={<Annoucements />} />
                    <Route path="/userprofile" element={<UserProfile />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    )
}

App.propTypes = {
    signOut: PropTypes.func,
    user: PropTypes.object,
}

export default withAuthenticator(App)
