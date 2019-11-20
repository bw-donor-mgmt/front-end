import React, { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";
import AddCampaign from './AddCampaign'

const CampaignList = () => {
  const [list, setList] = useState([]);
  const id = 1;
  useEffect(() => {
    axiosWithAuth()
      .get(`organizations/${id}/campaigns`)
      .then(response => setList(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section className="list">
      <AddCampaign />
      <CampaignCard
        key={list.id}
        id={list.id}
        name={list.name}
        description={list.description}
        goal={list.goal}
      />
      {/* {list.map(list => {
        return (
          <CampaignCard
            key={list.id}
            name={list.name}
            description={list.description}
            goal={list.goal}
          />
        );
      })} */}
    </section>
  );
};

export default CampaignList;
