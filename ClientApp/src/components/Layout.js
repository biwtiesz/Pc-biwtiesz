import React from 'react'
import {Fragment, useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import Table from './Table'
import useReadingProgress from '../components/useReadingProgress'

const Layout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const completion = useReadingProgress()
  console.log(completion)
  return (
    <>
      <div className="min-h-full ">
        <div
          style={{width: `${completion}%`}}
          className="bg-[#e7b24d] h-1 top-0 sticky z-50"
        />
        <Sidebar />
        <div className="lg:pl-64 flex flex-col">
          <main className="flex-1">
            <Navbar />
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
