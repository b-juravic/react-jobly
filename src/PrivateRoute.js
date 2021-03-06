import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserDataContext from "./UserDataContext";

/**
 * Protects private routes[Companies, Company, Jobs, Profile] only be accessed if user has authenticated.
 * Connects to context to access users loggedin/out status, redirects user to login page if not logged in.
 *
 * Props
 * -- exact- boolean
 * -- path- url path to child component
 * -- children- child component user attempting to access
 *
 * App -> Routes -> PrivateRoute
 */
function PrivateRoute({ exact, path, children }) {
  const { loggedInUserData } = useContext(UserDataContext);

  if (loggedInUserData.loggedOut) return <Redirect to="/login" />

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default PrivateRoute;