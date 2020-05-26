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
      <nav className="Navigation navbar navbar-expand-md">
        <NavLink className="navbar-brand" exact to="/">
          Jobly
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li>
            <NavLink
              className="nav-item"
              exact to="/login">
              Login
        </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  else {
    return (
      <nav className="Navigation navbar navbar-expand-md">
        <NavLink className="navbar-brand" exact to="/">
          Jobly
        </NavLink>

        <ul className="navbar-nav ml-auto">
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
            >
              Logout
          </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
