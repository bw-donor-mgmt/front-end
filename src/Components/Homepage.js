import React from "react";
import NavMain from "./NavMain";
import CampaignList from "./CampaignList";
import AddCampaign from "./AddCampaign";

const Homepage = () => {
  return (
    <div>
      <header>
        <NavMain />
      </header>
      <AddCampaign />
      <CampaignList />
    </div>
  );
};

export default Homepage;
