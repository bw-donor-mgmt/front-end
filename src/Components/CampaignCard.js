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

const CampaignCard = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.name}</CardHeader>
        <CardBody>
          <CardText>{props.description}</CardText>
          <Link to={`/charity/${props.id}`}>
            <Button>See Donor List</Button>
          </Link>
        </CardBody>
        <CardFooter>{props.goal}</CardFooter>
      </Card>
    </div>
  );
};

export default CampaignCard;
