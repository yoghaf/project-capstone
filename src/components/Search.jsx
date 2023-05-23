import React from "react";

function Search() {
  return (
    <div>
      <div className="flex items-center justify-center py-4">
        <input className="w-64 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="text" placeholder="Cari..." />
        <button className="ml-2 px-4 py-2 bg-slate-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">Cari</button>
      </div>
    </div>
  );
}

export default Search;
