import React, { useContext } from "react";
import UserDataContext from "./UserDataContext";
import JoblyApi from "./JoblyAPI";

/**
 * Renders details about a single job with Apply button for users to apply to job.
 * If a user has already applied to job [determined via applied prop] button is disabled.
 *
 * Props
 * -- id: num
 * -- title: ""
 * -- salary: num
 * -- equity: num
 * -- applied: boolean
 *
 *  * Connects to context
 * -- getUserData()
 *
 * App -> Routes -> PrivateRoute -> [Jobs or Company] -> JobCard
 */
function JobCard({ id, title, salary, equity, applied }) {
  const { getUserData } = useContext(UserDataContext);

  async function handleApply() {
    await JoblyApi.applyToJob(id);
    // Update App state/context with user data changes resulting from apply
    getUserData();
  }

  return (
    <li className="JobCard card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <div>Salary: ${salary}</div>
        <div>Equity: {equity}</div>
        {applied
          ?
          <button
            className="btn btn-md btn-danger float-right font-weight-bold text-uppercase"
            disabled
          >Apply
        </button>
          :
          <button
            className="btn btn-md btn-danger float-right font-weight-bold text-uppercase"
            onClick={handleApply}
          >Apply
        </button>}
      </div>
    </li>
  );
}

export default JobCard;
