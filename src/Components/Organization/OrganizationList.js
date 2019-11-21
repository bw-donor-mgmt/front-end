import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import AddOrg from "./AddOrg";
import Organization from './Organization'
import { getOrg } from '../../actions'

const OrganizationList = (props) => {
  const [toggleGet, setToggleGet] = useState(false)

  useEffect(()=> {
    props.getOrg()
  },[toggleGet])

  const toggleUpdate = () => {
    setToggleGet(!toggleGet)
  }

  if(props.isLoading){
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      <AddOrg toggleUpdate={toggleUpdate}/>
      {props.org.map(org => (
        <Organization key={org.id} toggleUpdate={toggleUpdate} name={org.name} mission={org.mission} id={org.id}/>
      ))}
    </div>
  );
};

const mapStateToProps = ({orgReducer}) => {
  return {
    org: orgReducer.orgData,
    isLoading: orgReducer.isLoading
  }
}
export default connect(mapStateToProps, { getOrg })(OrganizationList);

