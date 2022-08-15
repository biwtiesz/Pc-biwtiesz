import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Workspace from './pages/Workspace'
import Application from './pages/Application'
import Login from './pages/Login'

import Parameter from './pages/Parameter/Parameter'
import ParameterDetail from './pages/Parameter/Detail'

import GeneralCodeIndex from './pages/GeneralCode/GeneralCode'
import GeneralDetail from './pages/GeneralCode/Detail'
import GeneralDetailCreate from './pages/GeneralCode/Create'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="Workspace" element={<Workspace />} />
          <Route path="Application/:id" element={<Application />} />
          <Route path="Parameter" element={<Outlet />}>
            <Route index element={<Parameter />} />
            <Route path=":id" element={<Parameter />} />
            <Route path="Create" element={<ParameterDetail />} />
          </Route>

          <Route path="GeneralCode" element={<Outlet />}>
            <Route index element={<GeneralCodeIndex />} />
            <Route path=":id" element={<GeneralDetail />} />
            <Route path=":group/:id" element={<GeneralDetail />} />
            <Route path="Create" element={<GeneralDetailCreate />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
