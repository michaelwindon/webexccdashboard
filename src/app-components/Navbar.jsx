import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

import './Navbar.css'
import { Button, Icon } from '@mui/material'

const Navbar = ({ signOut }) => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bar">
                        <FaIcons.FaBars size="2.5em" onClick={showSidebar} />
                    </Link>
                    <Button onClick={signOut}>Sign Out</Button>
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
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar
