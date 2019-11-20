import React from "react";
import { Link } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <h1>Donor Management</h1>
      <Link to="/Homepage">Home</Link>
    </nav>
  );
};

export default NavMain;
