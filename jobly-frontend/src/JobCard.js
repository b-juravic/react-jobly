import React from "react"

// TODO: Add application logic

/**
 * Renders details about a single job
 * Props
 * -- title: ""
 * -- salary: num
 * -- equity: num
 *
 * App -> Routes -> PrivateRoute -> [Jobs or Company] -> JobCard
 */
function JobCard({ title, salary, equity }) {

  return (
    <li className="JobCard card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <div>Salary: ${salary}</div>
        <div>Equity: {equity}</div>
        <button
          className="btn btn-md btn-danger float-right font-weight-bold text-uppercase"
        >Apply
        </button>
      </div>
    </li>
  );
}

export default JobCard;