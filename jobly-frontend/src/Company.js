import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";
import JobCard from "./JobCard";
import "./Company.css";

/**
 * Renders Detail about a specific company along with JobCards for that company's jobs
 */
function Company() {
  /**company State is an object containing company data:
   * {name: name,
   * description: desc,
   * jobs: [{id: id, title: title, salary: salary, equity: equity}...]}
   */
  const [company, setCompany] = useState({ jobs: [] });
  const { handle } = useParams();

  useEffect(() => {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, [/**fetch single company from backend upon mount */]);

  return (
    <div className="Company col-md-8 offset-md-2">
      <h5>{company.name}</h5>
      <p>{company.description}</p>
        <ul>
          {company.jobs.map(job => (
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