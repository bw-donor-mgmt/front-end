import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllDonors } from '../../actions'
import AddDonor from './AddDonor'
import FullDonorCard from './FullDonorCard'


const FullDonorList = ({ getAllDonors, allDonors, isLoading }) => {
    const [updateAllDonors, setUpdateAllDonors] = useState(false)

    useEffect(() => {
        getAllDonors()
    }, [updateAllDonors])

    const toggleUpdateAllDonors = () => {
        setUpdateAllDonors(!updateAllDonors)
    }

    if(isLoading){
        return (
            <div>Loading</div>
        )
    }

    return (
        <div>
            <h1>Donors</h1>
            <AddDonor toggleUpdateAllDonors={toggleUpdateAllDonors}/>
            {allDonors.map(donor => (
                <FullDonorCard
                    key={donor.id}
                    name={donor.name}
                    id={donor.id}
                    phone={donor.phone}
                    email={donor.email}
                    method={donor.method}
                    contacted_on={donor.contacted_on}
                    toggleUpdateAllDonors={toggleUpdateAllDonors}
                />
            ))}
        </div>
    )
}

const mapStateToProps = ({ donorReducer }) => {
    return {
        allDonors: donorReducer.allDonorData,
        isLoading: donorReducer.isLoading
    }
}
export default connect(mapStateToProps, { getAllDonors })(FullDonorList)