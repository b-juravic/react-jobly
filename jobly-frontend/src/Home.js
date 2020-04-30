import React from "react"
import { Link } from "react-router-dom";

function Home() {



  return (
    <div>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place</h3>
      <Link to="/login">Log In</Link>
    </div>
  

    )
}

export default Home;