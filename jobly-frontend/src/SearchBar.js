import React, { useState } from "react";

function SearchBar({ filter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filter(searchTerm);
  }

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

export default SearchBar;