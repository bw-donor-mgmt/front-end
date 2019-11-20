import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import AddDonor from "./AddDonor";

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
    <section className="donorList">
      <AddDonor toggleUpdate={toggleUpdate} />
      {console.log(donor)}
      {/* {donor.map(DonorList => {
        return (
          <div>
            <h3>{DonorList.name}</h3>
            <h5>{DonorList.email}</h5>
            <h5>{DonorList.phone}</h5>
            <h5>{DonorList.contacted_on}</h5>
            <h5>{DonorList.history}</h5>
          </div>
        );
      })} */}
    </section>
  );
};

export default DonorList;
