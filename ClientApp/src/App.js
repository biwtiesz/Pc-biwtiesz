import React from "react";
import { Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Workspace from "./Pages/Workspace";
import Application from "./Pages/Application";
import Login from "./Pages/Login";

const App = () => {
  return (
    <AuthProvider>
      <Route exact path="/Login" component={Login} />
      <Route exact path={["/", "/Workspace", "/Application/:id"]}>
        <Layout>
          <AuthenticatedRoute exact path="/" component={Dashboard} />
          <AuthenticatedRoute exact path="/Workspace" component={Workspace} />
          <AuthenticatedRoute
            exact
            path="/Application/:id"
            component={Application}
          />
        </Layout>
      </Route>
      <Route exact path={["/Application/:id"]}></Route>
    </AuthProvider>
  );
};

export default App;
