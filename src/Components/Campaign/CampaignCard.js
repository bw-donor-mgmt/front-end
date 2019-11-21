import React, { useState } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { updateCampaign } from '../../actions'

const CampaignCard = (props) => {
  const { buttonLabel, className, name, description, goal, id, updateCampaign } = props
  const [modal, setModal] = useState(false);
  const [campInfo, setCampInfo] = useState({
    name: name,
    description: description,
    goal: goal
  })

  const toggleCamp = () => setModal(!modal);

  const handleChange = e => {
    setCampInfo({ [e.target.name]: e.target.value })
  }

  const submitCampForm = e => {
    e.preventDefault()
    updateCampaign(id, campInfo)
    props.toggleCampUpdate()
    setModal(!modal)
  }

  return (
    <div>
      <Card>
        <CardHeader tag="h3">{name}</CardHeader>
        <CardBody>
          <CardText>{description}</CardText>
          <Link to={`/charity/${id}/donor`}>
            <Button>See Donor List</Button>
          </Link>
          <Button color="danger" onClick={toggleCamp}>Edit{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggleCamp} className={className}>
            <ModalHeader toggle={toggleCamp}>Edit {name}</ModalHeader>
            <ModalBody>
              <form>
                <label>Edit Name:</label>
                <input
                  type='text'
                  name='name'
                  value={campInfo.name}
                  onChange={handleChange}
                />
                <label>Edit Description:</label>
                <input
                  type='text'
                  name='description'
                  value={campInfo.description}
                  onChange={handleChange}
                />
                <label>Edit Goal</label>
                <input
                  type='number'
                  name='goal'
                  value={campInfo.goal}
                  onChange={handleChange}
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={submitCampForm}>Update</Button>{' '}
              <Button color="secondary" onClick={toggleCamp}>Delete</Button>
            </ModalFooter>
          </Modal>
        </CardBody>
        <CardFooter> Goal: ${goal}</CardFooter>
      </Card>
    </div>
  );
};

export default connect(null, { updateCampaign })(CampaignCard);
