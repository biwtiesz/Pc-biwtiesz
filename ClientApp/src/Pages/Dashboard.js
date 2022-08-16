import React from 'react'
import Table from '../components/Table'
import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'

const Dashboard = () => {
  return (
    <div className=" px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className=" bg-white rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-5 pb-2 font-medium text-slate-700 tracking-wide">
            Workspace
          </div>
          <div className="p-3 text-center  text-6xl font-bold text-[rgb(59,130,246)]">
            28
          </div>
          <p className="text-center mb-5 text-[rgb(59,130,246)] font-bold">
            Task
          </p>
          <div className="p-5 py-3 bg-gray-100 text-slate-500 font-medium">
            View all
          </div>
        </div>
        <div className=" bg-white rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-5 pb-2 font-medium text-slate-700 tracking-wide">
            Open
          </div>
          <div className="p-3 text-center  text-6xl font-bold text-red-500">
            3
          </div>
          <p className="text-center mb-5 text-red-500 font-bold">Task</p>
          <div className="p-5 py-3 bg-gray-100 text-slate-500 font-medium">
            View all
          </div>
        </div>
        <div className=" bg-white rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-5 pb-2 font-medium text-slate-700 tracking-wide">
            Pool
          </div>
          <div className="p-3 text-center  text-6xl font-bold text-orange-500">
            5
          </div>
          <p className="text-center mb-5 text-orange-500 font-bold">Task</p>
          <div className="px-5 py-3 bg-gray-100 text-slate-500 font-medium">
            View all
          </div>
        </div>
        <div className=" bg-white rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-5 pb-2 font-medium text-slate-700 tracking-wide">
            Total
          </div>
          <div className="p-3 text-center  text-6xl font-bold text-green-500">
            33
          </div>
          <p className="text-center mb-5 text-green-500 font-bold">Task</p>
          <div className="px-5 py-3 bg-gray-100 text-slate-500 font-medium">
            View all
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
