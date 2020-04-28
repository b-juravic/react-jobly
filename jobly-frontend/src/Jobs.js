import React from "react";
import JobCard from "./JobCard";


/** Component that renders a list of JobCards
 */
function Jobs({ jobs }) {

    return (
      <ul>
        {jobs.map(job => (
          <JobCard
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            />))}
      </ul>
    )
}

export default Jobs;