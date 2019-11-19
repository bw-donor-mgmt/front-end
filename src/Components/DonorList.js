import React from "react";
import Axios from "axios";
import CampaignCard from "./CampaignCard";

const DonorList = () => {
  const [donor, setDonor] = useState([]);
  useEffect(() => {
    Axios.get(``)
      .then(response => {
        setDonor(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <section className="donorList">
      {donor.map(DonorList => {
        return (
          <div>
            <h3>{DonorList.name}</h3>
            <h5>{DonorList.email}</h5>
            <h5>{DonorList.phone}</h5>
            <h5>{DonorList.contacted_on}</h5>
            <h5>{DonorList.history}</h5>
          </div>
        );
      })}
    </section>
  );
};

export default DonorList;
