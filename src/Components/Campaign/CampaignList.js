import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import { axiosWithAuth } from "../../Utils/AxiosWithAuth";
import { getCampaign } from '../../actions'
import CampaignCard from "./CampaignCard";
import AddCampaign from "./AddCampaign";

const CampaignList = (props) => {
  const [org, setOrg] = useState([]);
  const [updateCamp, setUpdateCamp] = useState(false)
  const id = props.match.params.id;

  useEffect(()=> {
    props.getCampaign(id)
  },[updateCamp])

  useEffect(() => {
    axiosWithAuth()
      .get(`organizations/${id}/info`)
      .then(response => {
        setOrg(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const toggleCampUpdate = () =>{
    setUpdateCamp(!updateCamp)
  }

  if(props.isLoading){
    return (
      <div>Loading</div>
    )
  }
  
  return (
    <section className="list">
      <h1>{org.name}</h1>
      <AddCampaign toggleCampUpdate={toggleCampUpdate}/>
      {props.list.map(list => {
        return (
          <CampaignCard
            key={list.id}
            id={list.id}
            name={list.name}
            description={list.description}
            goal={list.goal}
            toggleCampUpdate={toggleCampUpdate}
          />
        );
      })}
    </section>
  );
};

const mapStateToProps = ({campReducer}) => {
  return {
    list: campReducer.campData,
    isLoading: campReducer.isLoading
  }
}

export default connect(mapStateToProps, { getCampaign })(CampaignList);
