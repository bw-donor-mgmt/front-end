import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import AddDonor from "./AddDonor";
import DonorCard from "./DonorCard";

const DonorList = props => {
  const [donor, setDonor] = useState([]);
  const [campaign, setCampaign] = useState([]);
  const [addedDonor, setAddedDonor] = useState(false);
  const id = props.match.params.id;

  const toggleUpdate = () => {
    setAddedDonor(!addedDonor);
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`campaigns/${id}/donors`)
      .then(response => {
        setDonor(response.data);
        console.log("axiosDonor", response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [addedDonor]);
  useEffect(() => {
    axiosWithAuth()
      .get(`campaigns/${id}`)
      .then(response => {
        setCampaign(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [addedDonor]);
  return (
    <section className="list">
      <h3>{campaign.name}</h3>
      <p>Goal: ${campaign.goal}</p>
      <AddDonor toggleUpdate={toggleUpdate} />
      {console.log(donor)}
      {donor.map(list => {
        return (
          <DonorCard
            key={list.id}
            id={list.id}
            name={list.name}
            email={list.email}
            phone={list.phone}
            contacted_on={list.contacted_on}
            campaignId={campaign.id}
          />
        );
      })}
    </section>
  );
};

export default DonorList;
