import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin),
    { userCreds } = userLogin;

  return (
    <Route
      {...rest}
      render={(props) =>
        userCreds ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const PublicRoutes = ({ component: Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin),
    { userCreds } = userLogin;

  return (
    <Route
      {...rest}
      render={(props) =>
        !userCreds ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
