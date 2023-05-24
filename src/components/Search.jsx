import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        //   onChange={e => handleSearch(e.target.value)}
      />
      <button className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
}

export default Search;
