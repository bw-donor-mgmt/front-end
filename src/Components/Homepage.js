import React from "react";
import NavMain from "./Nav/NavMain";
import OrganizationList from "./Organization/OrganizationList";

const Homepage = () => {
  return (
    <div>
      <header>
        <NavMain />
      </header>
      <OrganizationList />
    </div>
  );
};

export default Homepage;
