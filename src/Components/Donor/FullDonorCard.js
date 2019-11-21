import React from 'react'
import { connect } from 'react-redux'
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


const FullDonorCard = (props) => {
    const {name, phone, email, id, method} = props

    return (
        <div>
            <Card>
                <CardHeader tag='h3'>{name}</CardHeader>
                <CardBody>
                    <CardText>Phone Number: {phone}</CardText>
                    <CardText>Email: {email}</CardText>
                </CardBody>
                <CardFooter>Preferred Method of Contact: {method}</CardFooter>
            </Card>
        </div>
    )
}

export default connect()(FullDonorCard)