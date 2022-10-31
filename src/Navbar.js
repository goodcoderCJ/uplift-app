import React from "react";
import logo from "./images/uplift-logo-edit.png";
import Image from "./Image";
import { Link } from "react-router-dom";
import Links from "./Links";

import "./Styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Image src={logo} alt="uplift logo" className="logo" />
      </div>
      <nav className="nav">
        <ul><li>
            <Links to="/">Home</Links>
          </li>
          <li>
            <Links to="/about">About</Links>
          </li>
          <li>
            <Links to="/user">User</Links>
          </li>
          <li>
            <Link className="user-link" to="/donate">
              Donate now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
