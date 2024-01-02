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

function App({ signOut, user }) {
    const theme = useTheme()
    const handleSignout = () => {
        DataStore.clear()
        signOut()
    }
    return (
        <>
            <Router>
                <Navbar signOut={handleSignout} />
                <Routes>
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
                        element={<CreateContactCenter />}
                    />
                    <Route
                        path="/usermanagement"
                        element={<UserManagement />}
                    />
                    <Route
                        path="/queuemanagement"
                        element={<QueueManagement />}
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
