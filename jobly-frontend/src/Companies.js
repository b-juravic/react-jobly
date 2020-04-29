import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";


/** Component that renders a list of all CompanyCards
 * also sorts for companies that match search query.
 */

// NOTE/TODO: Scenario - user enters in URL to "companies/not-a-real-thing" and Rithm demo app
// renders "loading...". Joel said it was because the app wasn't handling errors for unfound imaginary companies
// If time, work out the solution.


function Companies() {
  
  const [companyList, setCompanyList] = useState([])

  
  useEffect( () => {
    async function fetchCompanies(){
      let newCompanies = await JoblyApi.getAllCompanies();
      setCompanyList( companyList => [...companyList, ...newCompanies]);
    }
    fetchCompanies();
  },[]
  )


  return (

    <ul>
      {companyList.map(company => (
        <CompanyCard
          handle={company.handle}
          name={company.name}
          description={company.description}
          logoUrl={company.logo_url}
        />))}
    </ul>
  )
}

export default Companies;