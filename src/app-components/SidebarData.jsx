import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdOutIcons from 'react-icons/md'

import { MyIcon } from '../ui-components'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        role: 'ALL',
    },
    {
        title: 'Administration',
        path: '/admin',
        icon: <FaIcons.FaCog />,
        cName: 'nav-text',
        role: 'ADMIN',
    },
    {
        title: 'Update Queue',
        path: '/queuemanagement',
        icon: <MdOutIcons.MdOutlinePeopleAlt />,
        cName: 'nav-text',
        role: 'ADMIN',
    },
    {
        title: 'Update Management',
        path: '/usermanagement',
        icon: <MdOutIcons.MdAdminPanelSettings />,
        cName: 'nav-text',
        role: 'ADMIN',
    },
    {
        title: 'Update Groups',
        path: '/groupmanagement',
        icon: <IoIcons.IoMdAddCircle />,
        cName: 'nav-text',
        role: 'ADMIN',
    },

]
