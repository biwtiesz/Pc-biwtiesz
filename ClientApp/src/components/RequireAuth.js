import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const RequireAuth = ({children}) => {
  const {isAuthenticated, loading} = useAuth()
  const location = useLocation()

  if (loading) return <div>Authenticating...</div>
  if (!isAuthenticated)
    return <Navigate to="/Login" state={{from: location}} replace />

  return children
}

export default RequireAuth
