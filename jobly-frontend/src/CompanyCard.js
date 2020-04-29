import React from "react"


/** Component renders detail for a single company */
function CompanyCard({ handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list
  // TODO: make sure logos render, just showing alt 4/29

  return (
    <li key={handle}>
      <a href={`companies/${handle}`}>
      <h5>{name}</h5>
      <p>{description}</p>
      <img src={logoUrl} alt={`${name} logo`} />
      </a>
    </li>
  );
}

export default CompanyCard;