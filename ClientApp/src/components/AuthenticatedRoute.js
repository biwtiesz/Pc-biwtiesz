import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthenticatedRoute = (props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to="/Login" />;

  return <Route {...props} />;
};

export default AuthenticatedRoute;
