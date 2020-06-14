import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import "./Companies.css";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

/**
 * Renders a list of CompanyCards for all companies and a Search to filter companies. Scrolls to top of page on mount.
 * State
 * -- companies: [{handle: "", name: "", description: "", photo_url: ""}, {}, ...]
 * -- searchTerm: ""
 *
 * App -> Routes -> PrivateRoute -> Companies
 */
function Companies() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Sets searchTerm used to filter companies via search box
  function filterCompanies(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(function getAllCompanies() {
    async function fetchCompanies() {
      let newCompanies;
      searchTerm
        ? newCompanies = await JoblyApi.getAllCompanies(searchTerm)
        : newCompanies = await JoblyApi.getAllCompanies()
      setCompanies([...newCompanies]);
    }
    fetchCompanies();
  }, [searchTerm])

  return (
    <div className="Companies col-md-8 offset-md-2">
      <ScrollToTopOnMount />
      <Search filter={filterCompanies} />
      <ul className="Companies-container">
        {companies.map(({ handle, name, description, logo_url }) => (
          <CompanyCard
            key={handle}
            handle={handle}
            name={name}
            description={description}
            logoUrl={logo_url}
          />))}
      </ul>
    </div>
  )
}

export default Companies;
