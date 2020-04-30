import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";
import Search from "./Search";


/** Component that renders a list of all CompanyCards
 * also sorts for companies that match search query.
 */

// NOTE/TODO: Scenario - user enters in URL to "companies/not-a-real-thing" and Rithm demo app
// renders "loading...". Joel said it was because the app wasn't handling errors for unfound imaginary companies
// If time, work out the solution.


function Companies() {

  const [companyList, setCompanyList] = useState([])

  //create function to filter through companyList for company.name that contains searchTerm
  //pass to SearchBar
  async function filterCompanies(searchTerm) {
    const req = await JoblyApi.getAllCompanies(searchTerm);
    console.log(`\n\n\n The value of companyList FROM FILTER is `, companyList);
    setCompanyList(companyList => [...req]);
  }
  console.log(`\n\n\n The value of companyList FROM COMPANIES is `, companyList);

  useEffect(() => {
    async function fetchCompanies() {
      let newCompanies = await JoblyApi.getAllCompanies();
      setCompanyList(companyList => [...companyList, ...newCompanies]);
    }
    fetchCompanies();
  }, []
  )

  return (
    <div>
      <Search filter={filterCompanies} />
      <ul>
        {companyList.map(company => (
          <CompanyCard
            handle={company.handle}
            name={company.name}
            description={company.description}
            logoUrl={company.logo_url}
          />))}
      </ul>
    </div>
  )
}

export default Companies;