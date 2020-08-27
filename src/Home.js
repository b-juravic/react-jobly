import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";
import capitalize from "lodash.capitalize";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

/**
 * Renders home page with welcome message if user logged in or log in link if not.
 * Scrolls to top of page on mount.
 *
 * Connects to context to access userData to determine if user authenticated.
 * -- loggedInUserData.loggedOut: boolean
 *
 * App -> Routes -> Home
 */

function Home() {
  const { loggedInUserData } = useContext(UserDataContext);
  const firstName = capitalize(loggedInUserData.userInfo.first_name);

  const welcomeMessage = loggedInUserData.loggedOut
    ? "All the jobs in one, convenient place."
    : `Welcome Back, ${firstName}!`;

  return (
    <div className="Home">
      <ScrollToTopOnMount />
      <svg className="svg-container" viewBox="205 0 493.5 380.8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <ellipse transform="rotate(90 7.7 71)" cx="127.1" cy="-168.1" rx="189.4" ry="245.7" fill="#FF7400" stroke="#FF7400" strokeWidth="2.1" />
        <text
          className="intro"
          x="215"
          y="180"
          fill="#FFF">
          Jobly</text>
        <text
          className="welcome-msg"
          x="215"
          y="230"
          fill="#FFF">
          {welcomeMessage}</text>
      </svg>
      {loggedInUserData.loggedOut
        ? <div className="btn-container">
          <Link
            className="btn register-login"
            to="/login">
            Sign-Up <span>|</span> Login
        </Link>
        </div>
        : null}
    </div>
  );
}

export default Home;
