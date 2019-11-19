import React, { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";

const CampaignList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("campaigns/4")
      .then(response => setList(response.data))
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <section className="list">
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
