import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-72 min-h-screen border border-gray-200 border-r ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        {/* <div className="relative z-50 h-16 bg-white  shadow-sm">Navbar</div> */}
        <Navbar />
        {/* Body */}
        <div className="flex-1 bg-slate-100 p-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
