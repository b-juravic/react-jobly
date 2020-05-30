import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Login.css";
import UserDataContext from "./UserDataContext";

/**
 * TODO: map over errors to display for user
 * TODO: require input from required fields
 */

const LOGIN_INITIAL_STATE = { username: "", password: "" };
const SIGNUP_INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" };

/*
 * Renders Login or Registration form
 *  * Connects to context:
 * -- loginUser: function to login user
 * -- registerUser: function to register new user
 * -- loggedInUserData.loggedOut to determine login status of user
 */
function Login() {
  const [signUp, setSignUp] = useState(false);

  const [formData, setFormData] = useState(LOGIN_INITIAL_STATE);

  const { loginUser, registerUser, loggedInUserData } = useContext(UserDataContext);
  const history = useHistory();

  // if user currently logged in, redirect to home page
  if (loggedInUserData.loggedOut === false) return <Redirect to="/" />

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  // await loginUser or registerUser so authenticated when redirected to jobs page
  async function handleSubmit(evt) {
    evt.preventDefault();
    signUp === true
      ? await registerUser(formData)
      : await loginUser(formData.username, formData.password);

    // successful login - save to browser history and redirect to /jobs path
    history.push("/jobs");
  }

  function displayLoginOrSignUp(evt) {
    const { name } = evt.target;

    if (name === "signUp") {
      setSignUp(true);
      setFormData(SIGNUP_INITIAL_STATE);
    }
    else {
      setSignUp(false);
      setFormData(LOGIN_INITIAL_STATE);
    }
  }

  return (
    <div className="Login container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <button
        name="login"
        type="button"
        className="btn btn-primary btn-login"
        onClick={displayLoginOrSignUp}>
        Login
      </button>
      <button
        name="signUp"
        type="button"
        className="btn btn-secondary btn-signup"
        onClick={displayLoginOrSignUp}>
        Sign Up
      </button>
      <div className="card mt-0">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}>
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}>
              </input>
            </div>
            {/* signUp fields only render if signUp state === true*/}
            {signUp ?
              <div id="sign-up">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}>
                  </input>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}>
                  </input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}>
                  </input>
                </div>
              </div>
              : null}
            <button className="btn btn-primary btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;