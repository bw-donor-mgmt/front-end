import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardFooter,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

import { updateDonor, deleteDonor } from '../../actions'

const FullDonorCard = (props) => {
    const { buttonLabel, className, name, phone, email, id, method, contacted_on, updateDonor, deleteDonor } = props
    const [modal, setModal] = useState(false);
    const [donorInfo, setDonorInfo] = useState({
        name: name,
        phone: phone,
        email: email,
        method: method,
        contacted_on: contacted_on
    })

    const toggleDonor = () => setModal(!modal);

    const handleChange = e => {
        setDonorInfo({ [e.target.name]: e.target.value })
    }

    const submitDonorForm = e => {
        e.preventDefault()
        updateDonor(id, donorInfo)
        props.toggleUpdateAllDonors()
        setModal(!modal)
    }

    const delDonor = e => {
        e.preventDefault()
        deleteDonor(id)
        setModal(!modal)
      }

    return (
        <div>
            <Card>
                <CardHeader tag='h3'>{name}</CardHeader>
                <CardBody>
                    <CardText>Phone Number: {phone}</CardText>
                    <CardText>Email: {email}</CardText>
                    <CardText>Last Contact: {contacted_on}</CardText>

                    <Button color="danger" onClick={toggleDonor}>Edit{buttonLabel}</Button>
                    <Modal isOpen={modal} toggle={toggleDonor} className={className}>
                        <ModalHeader toggle={toggleDonor}>Edit {name}</ModalHeader>
                        <ModalBody>
                            <form>
                                <label>Edit Name:</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={donorInfo.name}
                                    onChange={handleChange}
                                />
                                <label>Edit Phone:</label>
                                <input
                                    type='text'
                                    name='phone'
                                    value={donorInfo.phone}
                                    onChange={handleChange}
                                />
                                <label>Edit Email:</label>
                                <input
                                    type='text'
                                    name='email'
                                    value={donorInfo.email}
                                    onChange={handleChange}
                                />
                                <label>Edit Contacted Date:</label>
                                <input
                                    type='date'
                                    name='contacted_on'
                                    value={donorInfo.contacted_on}
                                    onChange={handleChange}
                                />
                                <label>Edit Contacted Date:</label>
                                <select
                                    name='contacted_on'
                                    value={donorInfo.contacted_on}
                                    onChange={handleChange}>
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                    </select>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={submitDonorForm}>Update</Button>{' '}
                            <Button color="secondary" onClick={delDonor}>Delete</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
                <CardFooter>Preferred Method of Contact: {method}</CardFooter>
            </Card>
        </div>
    )
}

export default connect(null, { updateDonor, deleteDonor })(FullDonorCard)