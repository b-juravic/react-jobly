import React from "react";
import JoblyApi from "./JoblyAPI";
import CompanyCard from "./CompanyCard";


/** Component that renders a list of all CompanyCards
 * also sorts for companies that match search query.
 */

// NOTE/TODO: Scenario - user enters in URL to "companies/not-a-real-thing" and Rithm demo app
// renders "loading...". Joel said it was because the app wasn't handling errors for unfound imaginary companies
// If time, work out the solution.


function Companies() {

  // fetch all companies from backend
  // CURRENTLY RETURNING A PROMISE- so map and render not working
    // WHAT'S NEXT?
    //do we need to add company state here?
    // should we implement a useEffect function to map companies once the companies state is updated?

  let companies = JoblyApi.getAllCompanies();
  console.log(companies);

  return (
    <ul>
      {companies.map(company => (
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

// Our component hierarchy, showing which component gets rendered by a parent
// component. There are some components (JobCard, Search, Alert) which appear
// several times --- they're the same component, but they are rendered by
// different parents.
// App                  : overall application
// ├── Navigation       : navigation bar on every page
// └─┬ Routes           : all <Route> components
//   ├─┬ Companies      : list of all companies
//   │ ├── CompanyCard  : a single company appearing on the list
//   │ └── Search       : the search widget (here, appearing on company list)
//   ├─┬ Company        : detail page for a company
//   │ └── JobCard      : info about job (here, rendered as part of company)
//   ├── Home           : homepage of site
//   ├─┬ Jobs           : list of all jobs
//   │ │ └── JobCard    : info about job (same component, now rendered in job list)
//   │ └── Search       : the search widget (here, appearing on job list)
//   ├─┬ Login          : login/signup route [see footnote]
//   │ └── Alert        : an "alert" component for showing up login success/failure
//   ├── PrivateRoute   : private routes (don't worry about this for now)
//   └─┬ Profile        : profile page
//     └── Alert        : same "alert", now used for success/failure of saving
// Footnote about "Login": this is the combined login/register form; we built
// this as one component, since they are similar and share some features. Another
// good option would be having separate components for login and register forms.