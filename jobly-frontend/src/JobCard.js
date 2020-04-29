import React from "react"


/** Component renders detail for a single job */
function JobCard({ title, salary, equity }) {

    return (
      <li>
        <h5>{title}</h5>
        <p>{salary}</p>
        <p>{equity}</p>
        {/* <a>Apply</a> */}
      </li>
    );
}

export default JobCard;