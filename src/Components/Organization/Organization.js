import React, { useState } from "react";
import { 
  Card, 
  Button, 
  CardHeader, 
  CardBody, 
  CardText, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { updateOrg, deleteOrg } from '../../actions'

const Organization = (props) => {
  const { buttonLabel, className, name, mission, id, updateOrg, toggleUpdate, deleteOrg } = props
  const [modal, setModal] = useState(false);
  const [orgInfo, setOrgInfo] = useState({
      name: name,
      mission: mission
  })

  const toggle = () => setModal(!modal);

  const handleChange = e => {
      setOrgInfo({ [e.target.name]: e.target.value })
  }

  const submitForm = e => {
    e.preventDefault()
    updateOrg(id, orgInfo)
    toggleUpdate()
    setModal(!modal)
  }

  const delOrg = e => {
    e.preventDefault()
    deleteOrg(id)
    setModal(!modal)
  }

  return (
    <div>
      <Card>
        <CardHeader tag="h3">{name} </CardHeader>
        <CardBody>
          <CardText>{mission}</CardText>
          <Link to={`charity/${id}`}>
            <Button>See Campaign List</Button>
          </Link>

          <Button color="danger" onClick={toggle}>Edit{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Edit {name}</ModalHeader>
            <ModalBody>
              <form>
                <label>Edit Name:</label>
                <input
                  type='text'
                  name='name'
                  value={orgInfo.name}
                  onChange={handleChange}
                />
                <label>Edit Mission:</label>
                <input
                  type='text'
                  name='mission'
                  value={orgInfo.mission}
                  onChange={handleChange}
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={submitForm}>Update</Button>{' '}
              <Button color="secondary" onClick={delOrg}>Delete</Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
};
export default connect(null, { updateOrg, deleteOrg })(Organization);
