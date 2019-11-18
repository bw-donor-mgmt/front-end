import React from "react";
import NavMain from "./NavMain";
import CampaignList from "./CampaignList";

const Homepage = () => {
  return (
    <div>
      <header>
        <NavMain />
      </header>
      <CampaignList />
    </div>
  );
};

export default Homepage;
