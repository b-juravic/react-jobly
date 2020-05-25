import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";

function Home() {
  const { loggedInUserData } = useContext(UserDataContext);

  console.log("home component- userdata", loggedInUserData);

  return (
    <div className="Home">
      <h1 className="font-weight-bold">Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {loggedInUserData._token
        ? <h2>Welcome Back!</h2>
        : <Link to="/login">Log In</Link>}
    </div>
    );
}

export default Home;