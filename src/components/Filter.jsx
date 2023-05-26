import React from "react";

function Fiilter({ options, handleFilter }) {
  return (
    <div className="input-group mb-3">
      <select className="form-select" onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Fiilter;
