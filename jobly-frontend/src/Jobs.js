import React, { useState } from "react";
import JobCard from "./JobCard";


/** Component that renders a list of JobCards
 */
function Jobs({ jobs }) {

    return (
      <div>
      <h1>Jobs for company:</h1>
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

export default Jobs;