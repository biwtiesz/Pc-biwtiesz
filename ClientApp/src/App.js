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
            <Route path=":id" element={<ParameterDetail />} />
            <Route path="Create" element={<ParameterDetail />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
