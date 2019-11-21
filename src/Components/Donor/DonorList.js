import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";

import DonorCard from "./DonorCard";
import { connect } from "react-redux";
import { getDonors } from "../../actions";
import AddDonation from "../Donations/AddDonations";

const DonorList = props => {
  const [campaign, setCampaign] = useState([]);
  const [addedDonor, setAddedDonor] = useState(false);
  const id = props.match.params.id;

  const toggleUpdateCampDonor = () => {
    setAddedDonor(!addedDonor);
  };

  useEffect(() => {
    props.getDonors(id);
  }, [addedDonor]);

  useEffect(() => {
    axiosWithAuth()
      .get(`campaigns/${id}`)
      .then(response => {
        setCampaign(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (props.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <section className="list">
      <h3>{campaign.name}</h3>
      <p>Goal: ${campaign.goal}</p>
      <AddDonation
        campaignId={id}
        toggleUpdateCampDonor={toggleUpdateCampDonor}
      />
      {props.donor.map(list => {
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

const mapStateToProps = ({ donorReducer }) => {
  return {
    donor: donorReducer.donorData,
    isLoading: donorReducer.isLoading
  };
};

export default connect(mapStateToProps, { getDonors })(DonorList);
