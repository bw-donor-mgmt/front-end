import React, { useEffect } from "react";
import { connect } from 'react-redux';

import AddOrg from "./AddOrg";
import Organization from './Organization'
import { getOrg } from '../../actions'

const OrganizationList = (props) => {

  useEffect(()=> {
    props.getOrg()
    console.log('state org', props.org)
  },[])

  if(props.isLoading){
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      <AddOrg />
      {props.org.map(org => (
        <Organization name={org.name} mission={org.mission} id={org.id}/>
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

