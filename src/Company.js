import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";
import JobCard from "./JobCard";
import "./Company.css";
import UserDataContext from "./UserDataContext";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

/**
 * Renders detail about a specific company including JobCards for each available job. Scrolls to top of page on mount.
 *
 * State
 * -- company {name: "", description: "", jobs: [{id: "", title: "", salary: num, equity: num}...]}
 *
 * Connects to conext to obtain applied jobs for current user
 * -- loggedInUserData.userInfo.jobs: [{id: num, title: "", company_handle: "", state: ""}, {}...]
 *
 * App -> Routes -> PrivateRoute -> Company
 */
function Company() {
  const [company, setCompany] = useState({ jobs: [] });
  const { handle } = useParams();

  const { loggedInUserData } = useContext(UserDataContext);
  // create array of applied job ids for current user
  const appliedJobsIds = loggedInUserData.userInfo.jobs.map(j => (j.id));

  /**fetch single company from backend */
  useEffect(function getSingleCompany() {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, [handle]);

  const { name, description, jobs } = company;

  return (
    <div className="Company company-container">
      <ScrollToTopOnMount />
      <h5 className="company-name">{name}</h5>
      <p className="company-description">{description}</p>
      <ul className="company-jobs">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            applied={appliedJobsIds.includes(job.id)}
          />))}
      </ul>
    </div>
  )
}


export default Company;