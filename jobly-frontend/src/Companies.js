import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import "./Companies.css";

/**
 * Renders a list of CompanyCards for all companies and a Search to filter companies
 * State
 * -- companies: [{handle: "", name: "", description: "", photo_url: ""}, {}, ...]
 *
 * App -> Routes -> PrivateRoute -> Companies
 */
function Companies() {
  const [companies, setcompanies] = useState([]);

  // Filters company list if search term entered into search box
  async function filterCompanies(searchTerm) {
    const req = await JoblyApi.getAllCompanies(searchTerm);
    setcompanies([...req]);
  }

  useEffect(function getAllCompanies() {
    async function fetchCompanies() {
      let newCompanies = await JoblyApi.getAllCompanies();
      setcompanies([...newCompanies]);
    }
    fetchCompanies();
  }, [/**fetch all companies from backend upon mount */])

  return (
    <div className="Companies col-md-8 offset-md-2">
      <Search filter={filterCompanies} />
      <ul className="Companies-container">
        {companies.map(company => (
          <CompanyCard
            key={company.handle}
            name={company.name}
            description={company.description}
            logoUrl={company.logo_url}
            handle={company.handle}
          />))}
      </ul>
    </div>
  )
}

export default Companies;