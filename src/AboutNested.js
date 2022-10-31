import React from "react";

import Image from "./Image";
import nested from "./images/smiling-child.png";
import "./Styles/nested.css";

export default function AboutNested() {
  return (
    <div className="nested-section">
      <Image src={nested} className="nested-img" />
      <div className="nested-copy">
        <p>
          This community is about good will and it centers around two kind of
          people
        </p>
        <p className="last">
          You can be a help and as well need help just reach out and we will be
          there
        </p>
        <li>Those willing to help out</li>
        <li>Those who need help</li>
      </div>
    </div>
  );
}
