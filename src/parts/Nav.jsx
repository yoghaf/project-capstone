import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid  align-items-center">
        <Link className="navbar-brand" to="#">
          Trash Hunter
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                My event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Save
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Registered
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <img src="./images/content/log-out.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
