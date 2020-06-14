import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";
import capitalize from "lodash.capitalize";

/**
 * Renders home page with welcome message if user logged in or log in link if not.
 *
 * Connects to context to access userData to determine if user authenticated.
 * -- loggedInUserData.loggedOut: boolean
 *
 * App -> Routes -> Home
 */
function Home() {
  const { loggedInUserData } = useContext(UserDataContext);
  const firstName = capitalize(loggedInUserData.userInfo.first_name);

  return (
    <div className="Home">
      <h1 className="display-2">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {!loggedInUserData.loggedOut
        ? <h2>Welcome Back, {firstName}!</h2>
        : <Link
            className="btn btn-primary btn-md font-weight-bold"
            to="/login">
          Log In
          </Link>}
    </div>
  );
}

export default Home;

