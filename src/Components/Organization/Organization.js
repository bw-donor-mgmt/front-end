import React from "react";
import { Card, Button, CardHeader, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import ModalOrg from './ModalOrg'

const Organization = props => {
  console.log(props)
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.name} </CardHeader>
        <CardBody>
          <CardText>{props.mission}</CardText>
          <Link to={`charity/${props.id}`}>
            <Button>See Campaign List</Button>
          </Link>
          <ModalOrg/> 
        </CardBody>
      </Card>
    </div>
  );
};
export default Organization;
