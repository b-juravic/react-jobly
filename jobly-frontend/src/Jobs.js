import React, { useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";



/** Component that renders a list of JobCards
 */
function Jobs({ jobs }) {

  let filterJobs = (searchTerm) => {
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return filteredJobs
  }

  
  // const filterJobs = !filteredJobs ? jobs : filteredJobs
  let jobList = (filterJobs.length > 0) ? filterJobs : jobs;

  return (
    <div>
      <h1>Jobs for company:</h1>
      <SearchBar filter={filterJobs} />
      <ul>
        {jobList.map(job => (
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

// const taco = filteredJobs === false ? jobs : filteredJobs
// let jobList = (filteredJobs.length > 0) ? filteredJobs : jobs;