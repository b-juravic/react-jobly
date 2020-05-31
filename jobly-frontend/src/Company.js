import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";
import JobCard from "./JobCard";
import "./Company.css";

/**
 * Renders detail about a specific company including JobCards for each available job.
 * State
 * -- company {name: "", description: "", jobs: [{id: "", title: "", salary: num, equity: num}...]}
 *
 * App -> Routes -> PrivateRoute -> [Companies] -> Company
 */
function Company() {
  const [company, setCompany] = useState({ jobs: [] });
  const { handle } = useParams();

  /**fetch single company from backend */
  useEffect(function getSingleCompany () {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, [handle]);

  const {name, description, jobs} = company;

  return (
    <div className="Company col-md-8 offset-md-2">
      <h5>{name}</h5>
      <p>{description}</p>
        <ul>
          {jobs.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />))}
        </ul>
    </div>
  )
}


export default Company;