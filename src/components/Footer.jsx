import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-white">&copy; 2023 My Website</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
