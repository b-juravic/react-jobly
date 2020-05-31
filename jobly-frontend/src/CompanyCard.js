import React from "react"
import { Link } from "react-router-dom";
import "./Card.css";
import defaultLogo from "./building.png";

// TODO: research why logos don't render
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
    <li className="CompanyCard card">
      <Link className="card-body" to={`companies/${handle}`}>
        <h6 className="card-title d-flex justify-content-between">
          <span>{name}</span>
          <img src={logoUrl || defaultLogo} alt="logo" />
        </h6>
        <p className="card-text">{description}</p>
      </Link>
    </li>
  );
}

export default CompanyCard;
