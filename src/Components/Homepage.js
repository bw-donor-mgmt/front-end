import React from "react";
import NavMain from "./NavMain";
import CampaignList from "./CampaignList";
import AddCampaign from "./AddCampaign";
import Organization from "./Organization";

const Homepage = () => {
  return (
    <div>
      <header>
        <NavMain />
      </header>
      <Organization />
    </div>
  );
};

export default Homepage;
