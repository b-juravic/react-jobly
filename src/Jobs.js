import React, { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import Search from "./Search";
import JoblyApi from "./JoblyAPI";
import "./Jobs.css";
import UserDataContext from "./UserDataContext";

/**
 * Renders a list of JobCards for all jobs and a Search to filter jobs
 * State
 * -- jobs: [{id: num, title: "", company_handle: "", salary: num, equity: num}, {}, ...]
 * -- searchTerm: ""
 *
 * Connects to conext to obtain applied jobs for current user
 * -- loggedInUserData.userInfo.jobs: [{id: num, title: "", company_handle: "", state: ""}, {}...]
 *
 * App -> Routes -> PrivateRoute -> Jobs
 */
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { loggedInUserData } = useContext(UserDataContext);
  // create array of applied job ids for current user
  const appliedJobsIds = loggedInUserData.userInfo.jobs.map(j => (j.id));

  // Sets searchTerm used to filter jobs via search box
  function filterJobs(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(function getAllJobs() {
    async function fetchJobs() {
      let newJobs;
      searchTerm
        ? newJobs = await JoblyApi.getAllJobs(searchTerm)
        : newJobs = await JoblyApi.getAllJobs()
      setJobs([...newJobs]);
    }
    fetchJobs();
  }, [searchTerm])

  return (
    <div className="Jobs col-md-8 offset-md-2">
      <Search filter={filterJobs} />
      <ul className="Jobs-container">
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

export default Jobs;
