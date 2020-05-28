import React, { useState, useContext } from "react"
import UserDataContext from "./UserDataContext";

// TODO: FIMISH Profile form!

/** Renders User Profile with a form to edit
*/
function Profile() {
  const {loggedInUserData} = useContext(UserDataContext);
  const userInfo = loggedInUserData.userInfo;

  const INITIAL_STATE = {
    username: userInfo.username,
    firstName: userInfo.first_name,
    lastName: userInfo.last_name,
    email: userInfo.email,
    photoURL: userInfo.photo_url || "",
    password: ""}

  const [profileFormData, setProfileFormData] = useState(INITIAL_STATE);

  function handleChange(evt) {
    //TBD
  }

  function handleSubmit(evt) {
    //TBD
  }

  console.log("profile", userInfo);
  console.log("profile form data", profileFormData);

  const { username, firstName, lastName, email, photoURL, password } = profileFormData;

  return (
    <div>
      <h3>Profile</h3>
      <form className="Profile" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}>
          </input>
        </div>
      </form>
    </div>
  )
}

export default Profile;