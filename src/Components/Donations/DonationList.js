import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import DonationCard from "./DonationCard";
import AddDonations from "./AddDonations";

const DonationList = props => {
  const [donation, setDonation] = useState([]);
  const id = props.match.params.id;
  const donorId = props.match.params.donorId;
  const [donor, setDonor] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`donors/${donorId}/donations`)
      .then(response => {
        setDonation(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
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
  return (
    <div>
      <h1>{donor.name}</h1>
      <AddDonations />
      {donation.map(list => {
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

export default DonationList;
