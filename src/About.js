import React from "react";
import donate from "./images/donate.png";
import Image from "./Image";
import "./Styles/about.css";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <section className="about">
        <Image src={donate} alt="hand holding coin" className="about-img" />
        <div className="about-text-copy">
          <li className="nonbulleted">
            <h2>Whom we are</h2>
            <p>
              We are a community of people interested in improving the lives of
              others through trainings in different skills, feeding of less
              priviledged and clothing of the motherless
            </p>
          </li>
          <div className="about-goal">
            <h3>Our goals</h3>
            <li>Impacting human lives</li>
            <li>
              Organizing trainings in skills that can take people off trenchies
            </li>
            <li>Feed the destitutes</li>
          </div>
        </div>
      </section>
      <Link to="/about/more" className="about-more">
        Read more...
      </Link>
      <Outlet />
    </div>
  );
}
