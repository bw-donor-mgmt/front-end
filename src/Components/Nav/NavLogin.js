import React from "react";
import { Link } from "react-router-dom";

const NavLogin = () => {
  return (
    <nav>
      <h1>Donor Management</h1>
      <Link to="/">Login</Link>
      <Link to="/SignUp">SignUp</Link>
    </nav>
  );
};

export default NavLogin;
