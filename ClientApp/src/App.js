import React from 'react'
import {Route, Switch} from 'react-router'
import {AuthProvider} from './contexts/AuthContext'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Layout from './components/Layout'
import Dashboard from './Pages/Dashboard'
import Workspace from './Pages/Workspace'
import Application from './Pages/Application'
import Login from './Pages/Login'
import Parameter from './Pages/Parameter/Parameter'
import ParameterDetail from './Pages/Parameter/Detail'

const App = () => {
  return (
    <AuthProvider>
      <Route exact path="/Login" component={Login} />
      <Route
        exact
        path={[
          '/',
          '/Workspace',
          '/Application/:id',
          '/Parameter',
          '/Parameter/:id',
          '/Parameter/Create',
        ]}
      >
        <Layout>
          <AuthenticatedRoute exact path="/" component={Dashboard} />
          <AuthenticatedRoute exact path="/Workspace" component={Workspace} />
          <AuthenticatedRoute
            exact
            path="/Application/:id"
            component={Application}
          />
          <Switch>
            <AuthenticatedRoute exact path="/Parameter" component={Parameter} />
            <AuthenticatedRoute
              exact
              path="/Parameter/Create"
              component={ParameterDetail}
            />
            <AuthenticatedRoute
              exact
              path="/Parameter/:id"
              component={ParameterDetail}
            />
          </Switch>
        </Layout>
      </Route>
    </AuthProvider>
  )
}

export default App
