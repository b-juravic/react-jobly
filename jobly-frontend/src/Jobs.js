import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Search from "./Search";
import JoblyApi from "./JoblyAPI";
import "./Jobs.css";

/**
 * Renders a list of JobCards for all jobs and a Search to filter jobs
 * State
 * -- jobs: [{id: num, title: "", company_handle: "", salary: num, equity: num}, {}, ...]
 *
 * App -> Routes -> PrivateRoute -> Jobs
 */
function Jobs() {
  const [jobs, setJobs] = useState([])

  // Filters job list if search term entered into search box
  async function filterJobs(searchTerm) {
    const req = await JoblyApi.getAllJobs(searchTerm);
    setJobs([...req]);
  }

  useEffect(function getAllJobs() {
    async function fetchJobs() {
      let newJobs = await JoblyApi.getAllJobs();
      setJobs([...newJobs]);
    }
    fetchJobs();
  }, [/**fetch all jobs from backend upon mount */])

  return (
    <div className="Jobs col-md-8 offset-md-2">
      <Search filter={filterJobs} />
      <ul className="Jobs-container">
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

export default Jobs;