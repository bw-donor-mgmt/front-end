import React from "react";
import NavMain from "./NavMain";
import CampaignList from "./CampaignList";
import AddCampaign from "./AddCampaign";
import OrganizationList from "./OrganizationList";

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
