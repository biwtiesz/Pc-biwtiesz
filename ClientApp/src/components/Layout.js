import React from 'react'
import {Fragment, useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import {Menu, Transition} from '@headlessui/react'
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
} from '@heroicons/react/outline'
import {SearchIcon} from '@heroicons/react/solid'
import Table from './Table'

const Layout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-full">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col">
        <main className="flex-1">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
