import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";
import Search from "./Search";


// NOTE/TODO: Scenario - user enters in URL to "companies/not-a-real-thing" and Rithm demo app
// renders "loading...". Joel said it was because the app wasn't handling errors for unfound imaginary companies
// If time, work out the solution.

/**
 * Renders a list of all CompanyCards and a search box
 */
function Companies() {

  const [companyList, setCompanyList] = useState([])

  // Filters company list if search term entered into search box
  // look into utilizing a useCallback here...
  async function filterCompanies(searchTerm) {
    const req = await JoblyApi.getAllCompanies(searchTerm);
    setCompanyList([...req]);
  }

  useEffect(() => {
    async function fetchCompanies() {
      let newCompanies = await JoblyApi.getAllCompanies();
      setCompanyList([...newCompanies]);
    }
    fetchCompanies();
  }, [/**fetch all companies from backend upon mount */]
  )

  return (
    <div>
      <Search filter={filterCompanies} />
      <ul>
        {companyList.map(company => (
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