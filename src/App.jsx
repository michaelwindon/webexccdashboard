import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    Text,
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
    const itemsDataStore = useDataStoreBinding({
        type: 'collection',
        model: ManagerModel,
        criteria: itemsFilter,
    }).items

    return (
        <>
            <Router>
                <Navbar signOut={handleSignout} user={user} />
                <Routes>
                    <Route
                        path="/admin"
                        element={
                            itemsDataStore[0]?.role == 'ADMIN' ? (
                                <Administration />
                            ) : (
                                <PermissionDenied path="/admin" />
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
                            itemsDataStore[0]?.role == 'ADMIN' ? (
                                <CreateContactCenter />
                            ) : (
                                <PermissionDenied path="/addcontactcenter" />
                            )
                        }
                    />
                    <Route
                        path="/usermanagement"
                        element={
                            itemsDataStore[0]?.role == 'ADMIN' ? (
                                <UserManagement />
                            ) : (
                                <PermissionDenied path="/usermanagement" />
                            )
                        }
                    />
                    <Route
                        path="/queuemanagement"
                        element={
                            itemsDataStore[0]?.role == 'ADMIN' ? (
                                <QueueManagement />
                            ) : (
                                <PermissionDenied path="/queuemanagement" />
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
