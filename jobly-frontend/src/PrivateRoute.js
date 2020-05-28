import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserDataContext from "./UserDataContext";

/**
 * Protects private routes[Companies, Company, Jobs] that can only be accessed if user has authenticated.
 * Redirects user to login page if not logged.
 *
 * Connects to context to access users loggedin/out status
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