import React, { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import AddCampaign from "./AddCampaign";

const CampaignList = props => {
  const [list, setList] = useState([]);
  const id = props.match.params.id;
  const [org, setOrg] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`organizations/${id}/campaigns`)
      .then(response => setList(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosWithAuth()
      .get(`organizations/${id}/info`)
      .then(response => {
        setOrg(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section className="list">
      <h1>{org.name}</h1>
      <AddCampaign />
      {list.map(list => {
        return (
          <CampaignCard
            key={list.id}
            id={list.id}
            name={list.name}
            description={list.description}
            goal={list.goal}
          />
        );
      })}
    </section>
  );
};

export default CampaignList;
