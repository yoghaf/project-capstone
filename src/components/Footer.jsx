import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-white">&copy; 2023 My Website</div>
          <div className="flex space-x-4">
            <Link to={"/"} className="text-white hover:text-white">
              Home
            </Link>
            <Link to={"/"} className="text-white hover:text-white">
              About
            </Link>
            <Link to={"/"} className="text-white hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
