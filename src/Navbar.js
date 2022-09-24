import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">The Cjay Blog</h1>
      <div className="links-items">
        <a href="/" id="nav-link1">
          Home
        </a>
        <a href="/content" id="nav-link2">New Blog</a>
      </div>
    </nav>
  );
}
