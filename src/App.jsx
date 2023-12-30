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
import UserManagement from './pages/UserManagement'
import CreateContactCenter from './pages/CreateContactCenter'

function App({ signOut, user }) {
    const theme = useTheme()

    return (
        <>
            <Router>
                <Navbar signOut={signOut} />
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <ViewContactCenter signOut={signOut} user={user} />
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
