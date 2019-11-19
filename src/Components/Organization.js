import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";
import AddCampaign from "./AddCampaign";
import CampaignList from "./CampaignList";
import AddOrg from "./AddOrg";

const Organization = () => {
  const [org, setOrg] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`organizations/1`)
      .then(response => {
        setOrg(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <AddOrg />
      <AddCampaign />
      <CampaignList />
    </div>
  );
};

export default Organization;
