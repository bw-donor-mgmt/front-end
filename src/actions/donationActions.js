import { axiosWithAuth } from '../Utils/AxiosWithAuth'

export const GET_DONATION_START = "GET_DONATION_START"
export const GET_DONATION_SUCCESS = "GET_DONATION_SUCCESS"
export const GET_DONATION_FAILURE = "GET_DONATION_FAILURE"

export const getDonations = (id) => dispatch => {
    dispatch({ type: GET_DONATION_START })
    axiosWithAuth()
        .get(`donors/${id}/donations`)
        .then(res => {
            dispatch({ type: GET_DONATION_SUCCESS, payload: res.data })
        })
        .catch(error =>
            dispatch({ type: GET_DONATION_FAILURE, payload: error })
        )
}

export const NEW_DONATION_START = "NEW_DONATION_START"
export const NEW_DONATION_SUCCESS = "NEW_DONATION_SUCCESS"
export const NEW_DONATION_FAILURE = "NEW_DONATION_FAILURE"

export const createDonation = (newDono) => dispatch => {
    dispatch({ type: NEW_DONATION_START })
    axiosWithAuth()
        .post('donations', newDono)
        .then(res => {
            dispatch({ type: NEW_DONATION_SUCCESS, payload: res.data }) 
        })
        .catch(err =>
            dispatch({ type: NEW_DONATION_FAILURE, payload: err })
        )

}

export const UPDATE_DONATION_START = "UPDATE_DONATION_START"
export const UPDATE_DONATION_SUCCESS = "UPDATE_DONATION_SUCCESS"
export const UPDATE_DONATION_FAILURE = "UPDATE_DONATION_FAILURE"

export const updateDONATION = (id, donoChanges) => dispatch => {
    dispatch({ type: UPDATE_DONATION_START })
    axiosWithAuth()
        .put(`donations/${id}`, donoChanges)
        .then(res => {
            dispatch({ type: UPDATE_DONATION_SUCCESS, payload: res.data })
        })
        .catch(err =>
            dispatch({ type: UPDATE_DONATION_FAILURE, payload: err })
        )
}

export const DELETE_DONATION_START = "DELETE_DONATION_START"
export const DELETE_DONATION_SUCCESS = "DELETE_DONATION_SUCCESS"
export const DELETE_DONATION_FAILURE = "DELETE_DONATION_FAILURE"

export const deleteDonation = (id) => dispatch => {
    dispatch({type: DELETE_DONATION_START})
    axiosWithAuth()
        .delete(`donations/${id}`)
        .then(res => {
            console.log('deleteDONATION', res)
            dispatch({ type: DELETE_DONATION_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: DELETE_DONATION_FAILURE, payload: err}))
}