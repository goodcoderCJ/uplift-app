import React from "react";
import { Link } from "react-router-dom";
import "./Styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-address">
          <p>Get in touch:</p>
          <p className="second-p">#34 Atlanta Georgia street</p>
        </div>
        <div className="copy">&copy; 2022 Uplift</div>
        <div className="socials">
          <Link to="https://facebook.com">Facebook</Link>
          <Link to="https://LinkedIn.com">LinkedIn</Link>
          <Link to="https://twitter.com">Twitter</Link>
        </div>
      </div>
    </div>
  );
}
