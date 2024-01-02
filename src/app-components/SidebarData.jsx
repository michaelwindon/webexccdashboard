import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Add Contact Center',
        path: '/addcontactcenter',
        icon: <IoIcons.IoMdAddCircle />,
        cName: 'nav-text',
    },
    {
        title: 'User Management',
        path: '/usermanagement',
        icon: <IoIcons.IoMdPersonAdd />,
        cName: 'nav-text',
    },
    {
        title: 'Queue Management',
        path: '/queuemanagement',
        icon: <FaIcons.FaWrench />,
        cName: 'nav-text',
    },
]
