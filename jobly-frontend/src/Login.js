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
    <div>
      <button
        name="login"
        type="button"
        onClick={displayLoginOrSignUp}>
        Login
      </button>
      <button
        name="signUp"
        type="button"
        onClick={displayLoginOrSignUp}>
        Sign Up
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}>
        </input>
        <label htmlFor="password">Password</label>
        <input type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}>
        </input>
        {/* signUp fields only render if signUp state === true*/}
        {signUp ?
          <div id="sign-up">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}>
            </input>
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
              id="lastName"
              name="lasttName"
              value={formData.lastName}
              onChange={handleChange}>
            </input>
            <label htmlFor="email">Email</label>
            <input type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}>
            </input>
          </div>
          : null}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;