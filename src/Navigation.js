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
    <nav className="Navigation navbar navbar-expand-md fixed-top">
      <NavLink className="navbar-brand" exact to="/">
      Jobly
      </NavLink>
      {loggedInUserData.loggedOut
        ? <ul className="navbar-nav ml-auto">
            <li>
              <NavLink
                className="nav-item"
                exact to="/login">
              Login
              </NavLink>
            </li>
          </ul>
        : <ul className="navbar-nav ml-auto">
            <li>
              <NavLink className="nav-item mr-4" exact to="/companies">
              Companies
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item mr-4" exact to="/jobs">
              Jobs
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item mr-4" exact to="/profile">
              Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item mr-4"
                exact to="/"
                onClick={logoutUser}
              >Logout
              </NavLink>
            </li>
          </ul>}
    </nav>
  );
}

export default Navigation;
