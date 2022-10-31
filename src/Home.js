import React from "react";
import hero from "./images/uplift-image-background.jpg";
import Image from "./Image";
import "./Styles/home.css";

export default function Home() {
  return (
    <div className="hero-page">
      <div className="hero-text">
        <h1>Join hands in getting others up</h1>
        <p>
          Community of donors seeking to improve lives and livelihood of people.
          It takes a village to build a human
        </p>
        <div className="hero-first-line"></div>
        <div className="hero-second-line"></div>
      </div>
      <Image
        src={hero}
        alt="person lifting another's hand"
        className="hero-image"
      />
    </div>
  );
}
