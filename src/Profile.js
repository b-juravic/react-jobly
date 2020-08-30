import React, { useState, useContext } from "react";
import UserDataContext from "./UserDataContext";
import JoblyApi from "./JoblyAPI";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import "./Profile.css";

// TODO: Prevent form submission if password blank- other FE form validation?
// TODO: Need to map over error messages - right now showing single message, but array returned from BE

/**
 * Renders user Profile with a form allowing for edits. Scrolls to top of page on mount.
 *
 * Connects to context
 * -- loggedInUserData { _token: "", userInfo: {}, loggedOut: boolean}
 * -- getUserData()
 *
 * App -> Routes -> PrivateRoute -> Profile
 */
function Profile() {
  const { loggedInUserData } = useContext(UserDataContext);
  const { getUserData } = useContext(UserDataContext);
  const userInfo = loggedInUserData.userInfo;

  const INITIAL_STATE = {
    username: userInfo.username,
    firstName: userInfo.first_name,
    lastName: userInfo.last_name,
    email: userInfo.email,
    password: ""
  }

  const [userMessages, setUserMessages] = useState({});
  const [profileFormData, setProfileFormData] = useState(INITIAL_STATE);
  const { username, firstName, lastName, email, password } = profileFormData;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileFormData(current => ({
      ...current,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await JoblyApi.updateUser(profileFormData, username);
      setUserMessages({ status: "success", messages: "Your profile was updated!" });

      // Update App state/context with user data changes
      getUserData();
    }
    catch (err) {
      setUserMessages({ status: "error", messages: err });
    }
  }

  function displayUserMessages() {
    return (
      <div
        className={userMessages.status === "error" ? "msg error" : "msg success"}>
        {userMessages.messages}
      </div>
    )
  }

  return (
    <div className="Profile profile-container">
      <ScrollToTopOnMount />
      {userMessages?.messages
            ? displayUserMessages()
            : null}
      <div className="profile-card-container">
        <div className="profile-card-content">
          <form onSubmit={handleSubmit}>
            <div className="label-input-group">
              <label className="form-label" htmlFor="username">Username</label>
              <input
                className="form-input read-only"
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
                readOnly>
              </input>
            </div>
            <div className="label-input-group">
              <label className="form-label" htmlFor="firstName">First Name</label>
              <input
                className="form-input"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={handleChange}>
              </input>
            </div>
            <div className="label-input-group">
              <label className="form-label" htmlFor="lastName">Last Name</label>
              <input
                className="form-input"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={handleChange}>
              </input>
            </div>
            <div className="label-input-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}>
              </input>
            </div>
            <div className="label-input-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}>
              </input>
            </div>
            <button className="button-save">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;