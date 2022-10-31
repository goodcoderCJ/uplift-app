import React from "react";
import { Link } from "react-router-dom";
import "./Styles/notfound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>4<span className="zero">0</span>4</h2>
      <p>That page can not be found</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
}
