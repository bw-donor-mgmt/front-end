import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import { getAllDonors } from '../../actions'
import AddDonor from './AddDonor'
import FullDonorCard from './FullDonorCard'


const FullDonorList = ({getAllDonors, allDonors}) => {
    
    useEffect(()=> {
        getAllDonors()
    },[])
    
    return (
        <div>
            <h1>Donors</h1>
            <AddDonor/>
            {allDonors.map(donor=> (
                <FullDonorCard
                    key={donor.id} 
                    name={donor.name}
                    id={donor.id}
                    phone={donor.phone}
                    email={donor.email}
                    method={donor.method}
                />
            ))}
        </div>
    )
}

const mapStateToProps = ({donorReducer}) => {
    return {
        allDonors: donorReducer.allDonorData
    }
}
export default connect(mapStateToProps, {getAllDonors})(FullDonorList)