import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/Nav/nav.css";
import { buttonOpen, buttonClose, onSticky } from "../../assets/style/Nav/navAnimation";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    buttonOpen(); // Memanggil fungsi buttonOpen dari modul navAnimation
    buttonClose(); // Memanggil fungsi buttonClose dari modul navAnimation
    onSticky(); // Memanggil fungsi onSticky dari modul navAnimation
  }, []);

  return (
    <>
      <nav className="nav-desktop">
        <div className="hamburger">
          <button id="button-hamburger" onClick={toggleNav}>
            <svg fill="#ffffff" viewBox="0 0 24 24" width="1em" height="1em">
              <path fillRule="evenodd" clipRule="evenodd" d="M21 7.75H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5zm0 5H3v-1.5h18v1.5z"></path>
            </svg>
          </button>
        </div>
        <div className="logo">
          <Link to="/dashboard">Trash Hunter</Link>
        </div>
        <ul className={isNavOpen ? "open" : ""}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/myevent">My Event</Link>
          </li>
          <li>
            <Link to="/dashboard/save">Save</Link>
          </li>
          <li>
            <Link to="/dashboard/registeredevent">Registered</Link>
          </li>
          <li>
            <Link to="/dashboard/logout">
              <img src="./images/content/log-out.png" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <nav className={`nav-hidden ${isNavOpen ? "open" : ""}`}>
          <button aria-label="Tutup" className="close-button" onClick={toggleNav}>
            &times;
          </button>

          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/myevent">My Event</Link>
            </li>
            <li>
              <Link to="/dashboard/save">Save</Link>
            </li>
            <li>
              <Link to="/dashboard/registeredevent">Registered</Link>
            </li>
            <li>
              <Link to="/dashboard/logout">
                <img src="./images/content/log-out.png" alt="" />
              </Link>
            </li>
          </ul>
        </nav>
        <button className={`shadow-nav ${isNavOpen ? "open" : ""}`} onClick={toggleNav}></button>
      </div>
    </>
  );
}

export default Navigation;
