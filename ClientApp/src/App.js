import React from "react";
import { Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Login } from "./Pages/Login";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <AuthenticatedRoute exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
      </Layout>
    </AuthProvider>
  );
};

export default App;
