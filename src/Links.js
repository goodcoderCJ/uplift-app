import React from "react";
import { NavLink } from "react-router-dom";

export default function Links({ to, children }) {
  //created custom links
  return (
    <>
      <NavLink to={to}>{children}</NavLink>
    </>
  );
}
