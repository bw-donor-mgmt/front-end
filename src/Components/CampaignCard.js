import React from "react";
import { Card, Button, CardHeader, CardBody, CardText } from "reactstrap";

const CampaignCard = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Header</CardHeader>
        <CardBody>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>See Donor List</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CampaignCard;
