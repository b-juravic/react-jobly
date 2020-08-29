import React from "react"
import { Link } from "react-router-dom";
import "./CompanyCard.css";
import defaultLogo from "./building.png";

/**
 * Renders details about a single company as a link
 * Props from Companies
 * -- handle: ""
 * -- name: ""
 * -- description: ""
 * -- logoUrl: ""
 *
 * App -> Routes -> PrivateRoute -> Companies -> CompanyCard
 */
function CompanyCard({ handle, name, description, logoUrl }) {

  return (
    <li className="CompanyCard company-card-content">
      <Link className="card-link" to={`companies/${handle}`}>
        <img className="logo" src={logoUrl || defaultLogo} alt="logo" />
        <h6 className="name">{name}</h6>
        <p className="description">{description}</p>
      </Link>
    </li>
  );
}

export default CompanyCard;
