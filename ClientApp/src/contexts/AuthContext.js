import React, {createContext, useState, useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const login = (username, password) => {
    axios
      .post('/api/identity/signin', {
        username: username,
        password: password,
      })
      .then(({data}) => {
        localStorage.setItem('access_token', data.token)
        setAuthenticated(true)
        navigate('/')
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setAuthenticated(false)
    localStorage.removeItem('access_token')
  }

  useEffect(() => {
    var token = localStorage.getItem('access_token')

    if (token) {
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])
  return (
    <AuthContext.Provider
      value={{isAuthenticated, user, loading, error, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}
