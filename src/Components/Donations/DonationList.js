import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import { getDonations } from '../../actions'
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import DonationCard from "./DonationCard";
import AddDonations from "./AddDonations";
import { from } from "rxjs";

const DonationList = (props) => {
  const id = props.match.params.id;
  // const donorId = props.match.params.donorId;
  const [donor, setDonor] = useState([]);

  useEffect(() => {
    props.getDonations(id)
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get(`donors/${id}`)
      .then(response => {
        setDonor(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if(props.isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      <h1>{donor.name}</h1>
      <AddDonations />
      {props.donation.map(list => {
        return (
          <DonationCard
            key={list.id}
            id={list.id}
            amount={list.amount}
            date={list.date}
            donor={donor}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({donationReducer}) => {
  return {
    donation: donationReducer.donationData,
    isLoading: donationReducer.isLoading
  }
}

export default connect(mapStateToProps, { getDonations })(DonationList);
