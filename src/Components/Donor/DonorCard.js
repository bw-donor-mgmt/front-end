import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";

const DonorCard = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.name}</CardHeader>
        <CardBody>
          <CardText>{props.email}</CardText>
          <CardText>{props.phone}</CardText>
          <Link to={`/charity/${props.campaignId}/donor/${props.id}`}>
            <Button>See Donor</Button>
          </Link>
        </CardBody>
        <CardFooter>Last Contacted On: {props.contacted_on}</CardFooter>
      </Card>
    </div>
  );
};

export default DonorCard;
