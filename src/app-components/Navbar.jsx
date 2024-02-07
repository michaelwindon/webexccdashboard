import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { DataStore } from 'aws-amplify/datastore'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { Text, useAuthenticator } from '@aws-amplify/ui-react'
import {
    useDataStoreBinding,
    createDataStorePredicate,
} from '../ui-components/utils'
import { ManagerModel } from '../models'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

import './Navbar.css'
import { Button, Icon } from '@mui/material'
import ProfileButton from './ProfileButton'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const { user, authStatus, signOut } = useAuthenticator()

    const itemsFilterObj = {
        field: 'ManagerModel.email',
        operand: user?.username,
        operator: 'eq',
    }

    const itemsFilter = createDataStorePredicate(itemsFilterObj)
    const itemsDataStore = useDataStoreBinding({
        type: 'collection',
        model: ManagerModel,
        criteria: itemsFilter,
    }).items

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bar">
                        <FaIcons.FaBars size="2.5em" onClick={showSidebar} />
                    </Link>
                    <Text color="white" fontSize="2em">
                        Webex Admin Manangement Tool
                    </Text>
                    {authStatus === 'authenticated' ? (
                        <ProfileButton gotolink="/userprofile/" />
                    ) : (
                        <div></div>
                    )}
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                (item.role === itemsDataStore[0]?.role ||
                                    item.role == 'ALL') && (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            )
                        })}
                        <li key="signout" className="nav-text">
                            <Link
                                to="#"
                                onClick={() => {
                                    DataStore.clear()
                                    signOut()
                                }}
                            >
                                <FaIcons.FaSignOutAlt />
                                <span>Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar
