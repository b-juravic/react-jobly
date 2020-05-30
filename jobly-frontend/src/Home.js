import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";

/**
 * Renders home page with welcome message if user logged in or log in link if not.
 *
 * Connects to context to access userData to determine if user authenticated.
 * -- loggedInUserData._token
 */
function Home() {
  const { loggedInUserData } = useContext(UserDataContext);

  return (
    <div className="Home">
      <h1 className="display-2">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {loggedInUserData._token
        ? <h2>Welcome Back!</h2>
        : <Link
          className="btn btn-primary btn-md font-weight-bold"
          to="/login">
          Log In
          </Link>}
    </div>
  );
}

export default Home;