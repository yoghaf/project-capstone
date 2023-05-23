import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";

function Event() {
  return (
    <div className="px-10 py-4">
      <div className="flex ">
        <Search />
        <Filter />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array(9)
          .fill()
          .map((item, index) => (
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg" key={index}>
              <img className="w-full" src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="Gambar" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Judul Card</div>
                <p className="text-gray-700 text-base">Tanggal</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Event;
