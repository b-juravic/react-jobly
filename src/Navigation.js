import React, { useContext } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import UserDataContext from "./UserDataContext";

/**
 * Renders navigation links
 *
 * Uses loggedInUserData.loggedOut [boolean] from context to determine links to render.
 * Uses logoutUser function from context to logout a user on click of logout link.
 *
 * App -> Navigation
 */
function Navigation() {
  const { loggedInUserData, logoutUser } = useContext(UserDataContext);

  return (
    <nav className="Navigation">
      {loggedInUserData.loggedOut
        ? <NavLink
          className="nav-item-link"
          exact to="/login">
          LOGIN
        </NavLink>
        : <>
          <NavLink className="nav-item-link" exact to="/companies">COMPANIES</NavLink>
          <NavLink className="nav-item-link" exact to="/jobs">JOBS</NavLink>
          <NavLink className="nav-item-link" exact to="/profile">PROFILE</NavLink>
          <NavLink
            className="nav-item-link"
            exact to="/"
            onClick={logoutUser}>
            LOGOUT
          </NavLink>
          </>}
      <NavLink className="nav-item-link nav-brand" exact to="/">J</NavLink>
    </nav>
  );
}

export default Navigation;