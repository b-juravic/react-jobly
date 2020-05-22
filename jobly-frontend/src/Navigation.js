import React, { useContext } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import UserDataContext from "./UserDataContext";


/**
 * Renders navigation links. Uses loggedInUserData from context to determine links to render.
 * Uses logoutUser function from context to log out a user on click.
 */
function Navigation() {
  const { loggedInUserData, logoutUser } = useContext(UserDataContext);

  if (!loggedInUserData._token) {
    return (
      <nav className="Navigation">
        <NavLink exact to="/">
          Jobly
      </NavLink>
        <NavLink
          exact to="/login">
          Login
      </NavLink>
      </nav>
    );
  }
  else {
    return (
      <nav className="Navigation">
        <NavLink exact to="/">
          Jobly
      </NavLink>
        <NavLink exact to="/companies">
          Companies
      </NavLink>
        <NavLink exact to="/jobs">
          Jobs
      </NavLink>
        <NavLink exact to="/profile">
          Profile
      </NavLink>
        <NavLink
          exact to="/"
          onClick={logoutUser}
        >
          Logout
      </NavLink>
      </nav>
    );
  }
}

export default Navigation;
