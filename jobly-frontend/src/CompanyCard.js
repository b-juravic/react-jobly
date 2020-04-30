import React from "react"
import {Link} from "react-router-dom";


/** Component renders detail for a single company */
function CompanyCard({handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list
  // TODO: make sure logos render, just showing alt 4/29

  return (
    <li>
      <Link to={`companies/${handle}`}>
        <h5>{name}</h5>
        <p>{description}</p>
        <img src={logoUrl} alt={`${name} logo`} />
      </Link>
    </li>
  );
}

export default CompanyCard;