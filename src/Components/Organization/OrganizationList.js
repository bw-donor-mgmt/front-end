
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import AddOrg from "./AddOrg";
import Organization from "./Organization";

const OrganizationList = () => {
  const [org, setOrg] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`organizations`)
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
      {org.map(org => (
        <Organization name={org.name} mission={org.mission} id={org.id} />
      ))}
    </div>
  );
};

export default OrganizationList;

