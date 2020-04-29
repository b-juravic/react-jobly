import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";
import Jobs from "./Jobs";

// Company is the company details we see from companies url that is rendered above the list of job cards for that specific company

function Company() {
  // company is an object of company data in cluding a key of jobs
  // jobs value is an array of job objects {jobs: {id: id, title: title, salary: salary, equity: equity}...}
  const [company, setCompany] = useState({jobs: []});
  const { handle } = useParams();

  //make backend fetch for single company
  useEffect(() => {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, []);

  return (
    <div>
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
      <div>
        <Jobs jobs={company.jobs}/>
      </div>
    </div>
  )
}


export default Company;