import React, { useState } from "react";
import "./Search.css";

/**
 * Renders a search form, stores search form input
 * and invokes filter function (passed down as prop) with search input data.
 */
function Search({ filter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  }

  const handleSubmit = (evt) => {
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
        <button className="btn btn-lg btn-primary">Submit</button>
      </form>
    </div>

  );
}

export default Search;