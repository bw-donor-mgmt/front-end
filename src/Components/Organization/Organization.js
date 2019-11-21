import React from "react";
import { Card, Button, CardHeader, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const Organization = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.name}</CardHeader>
        <CardBody>
          <CardText>{props.mission}</CardText>
          <Link to={`/charity/${props.id}`}>
            <Button>See Campaign List</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
export default Organization;
