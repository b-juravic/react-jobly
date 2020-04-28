import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){

    return(
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
            <NavLink exact to="/login">
                Login/LogOut
            </NavLink>
        </nav>
    )
}

export default Navigation;