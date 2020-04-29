import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";

// Company is the company details we see from companies url that is rendered above the list of job cards for that specific company

//   ├─┬ Company        : detail page for a company
//   │ └── JobCard      : info about job (here, rendered as part of company)
function Company() {
  // find one company backend route returns obj of company data, including key of jobs with value of an array of all dob data.
  const [company, setCompany] = useState({});
  const { handle } = useParams();
  //make backend fetch for single company

  useEffect(() => {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, []);

  // map over job data and render below
  // Need to revist

  // useEffect( () => {
  //   async function fetchCompanies(){
  //     let newCompanies = await JoblyApi.getAllCompanies();
  //     setCompanyList( companyList => [...companyList, ...newCompanies]);
  //   }
  //   fetchCompanies();
  // },[]
  // )

  return (
    <div>
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
    </div>
  )
}


export default Company;

    // render Jobs company={company}
      // in jobs component make api call
      //in jobs component render map of jobCards for company


// App
// ├── Navigation
// └─┬ Routes
//   ├─┬ Companies
//   │ ├── CompanyCard
//   │ └── Search
//   ├─┬ Company
//   │ └── JobCard
//   ├── Home
//   ├─┬ Jobs
//   │ │ └── JobCard
//   │ └── Search
//   ├─┬ Login
//   │ └── Alert
//   ├── PrivateRoute  (don't worry about this for now)
//   └─┬ Profile
//     └── Alert

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