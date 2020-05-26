import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";

function Home() {
  const { loggedInUserData } = useContext(UserDataContext);

  console.log("home component- userdata", loggedInUserData);

  return (
    <div className="Home">
      <h1 className="display-2">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {loggedInUserData._token
        ? <h2>Welcome Back!</h2>
        : <Link className="btn btn-primary btn-md font-weight-bold" to="/login">Log In</Link>}
    </div>
    );
}

export default Home;