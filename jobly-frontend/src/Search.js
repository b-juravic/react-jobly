import React, { useState } from "react";


/**
 * Creates API request for the parent that passes down their
 * related API request function and then passes back up to parent
 * to make API call
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

  // use filter() to build the API request to send back to parent

  return (
    <div>
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
  )

}

export default Search;