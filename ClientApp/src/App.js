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
import GeneralCodeCreate from './pages/GeneralCode/Create'
import GeneralCodeDetail from './pages/GeneralCode/Detail'
import GeneralCodeDetailEdit from './pages/GeneralCode/Edit'

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
            <Route path=":id" element={<GeneralCodeDetail />} />
            <Route path="Detail/:group" element={<GeneralCodeDetail />} />
            <Route path="Edit/:id" element={<GeneralCodeDetailEdit />} />
            <Route path="Create/:code" element={<GeneralCodeCreate />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
