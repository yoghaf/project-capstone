import React from "react";
import { Link } from "react-router-dom";

function Nav(navigation) {
  const dashboard = navigation.navigation.dashboard;

  return (
    <header>
      <div className="h-20 bg-slate-400 grid grid-cols-2 items-center px-10">
        <div className="">
          <Link to="/">
            <h1 className="text-3xl font-bold text-white">Trash Hunter</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          {dashboard.map((item, index) => {
            return (
              <Link to={"/" + item} key={index}>
                <p className="font-bold text-white">{item}</p>
              </Link>
            );
          })}
          <div className=" flex justify-end">
            <Link to={"/"}>Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
