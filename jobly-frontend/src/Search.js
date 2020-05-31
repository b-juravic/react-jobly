import React, { useState } from "react";
import "./Search.css";

/**
 * Renders Search form for user to seach companies or jobs
 * Props
 * -- filter()
 *
 * State
 * --searchTerm: ""
 *
 * App -> Routes -> PrivateRoute -> [Companies or Jobs] -> Search
 */
function Search({ filter }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    filter(searchTerm);
  }

  return (
    <div className="Search">
      <form className="form-inline" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="search"></label>
        <input className="form-control form-control-lg flex-grow-1" type="text"
          id="search"
          name="search"
          value={searchTerm}
          placeholder="Enter search term..."
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-primary">Search</button>
      </form>
    </div>
  );
}

export default Search;