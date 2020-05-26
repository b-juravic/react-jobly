import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Login.css";
import UserDataContext from "./UserDataContext";

/**
 * TODO: map over errors to display for user
 * TODO: require input from required fields
 * TODO: define signUpUser function
 * TODO: in handleSubmit, determine which function to invoke: logIn or signUpUser
 */

/*
 * Renders Login or Registration form
 *  * Connects to context:
 * -- loginUser: function to update user data in state of app/context
 */
function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [signUp, setSignUp] = useState(false);

  const { loginUser } = useContext(UserDataContext);
  const history = useHistory();


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  // await loginUser so authenticated when redirected to jobs page
  async function handleSubmit(evt) {
    evt.preventDefault();
    await loginUser(formData.username, formData.password);

    // successful login - save to browser history and redirect to /jobs path
    history.push("/jobs");
  }

  function displayLoginOrSignUp(evt) {
    const { name } = evt.target;
    (name === "signUp")
      ? setSignUp(true)
      : setSignUp(false);
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
                    name="lasttName"
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