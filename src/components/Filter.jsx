import React from "react";

function Filter() {
  return (
    <div className="flex items-center space-x-4">
      <label className="font-medium">Filter:</label>
      <select className=" text-white bg-slate-500 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500">
        <option value="">Semua</option>
        <option value="city1">city 1</option>
        <option value="city2">city 2</option>
        <option value="city3">city 3</option>
      </select>
    </div>
  );
}

export default Filter;
