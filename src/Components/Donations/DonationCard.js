import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";

const DonationCard = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.name}</CardHeader>
        <CardBody>
          <CardText>Donated ${props.amount}</CardText>
          <CardText>Donated on {props.date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;
