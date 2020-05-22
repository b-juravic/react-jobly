import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap";

function Home() {
  const { loggedInUserData } = useContext(UserDataContext);

  console.log("home component- userdata", loggedInUserData);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {loggedInUserData._token
        ? <h3>Welcome Back!</h3>
        : <Link to="/login">Log In</Link>}
    </div>
    );
}

export default Home;