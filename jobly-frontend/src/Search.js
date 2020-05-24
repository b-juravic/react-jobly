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
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input type="text"
          id="search"
          name="search"
          value={searchTerm}
          placeholder="Enter search term..."
          onChange={handleChange}
          />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Search;