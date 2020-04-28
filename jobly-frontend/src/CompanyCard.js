import React from "react"


/** Component renders detail for a single company */
function CompanyCard({ handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list

  return (
    <li key={handle}>
      <h5>{name}</h5>
      <p>{description}</p>
      <img src={logoUrl} alt={`${name} logo`} />
    </li>
  );
}

export default CompanyCard;