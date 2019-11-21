import { axiosWithAuth } from '../Utils/AxiosWithAuth'

export const GET_CAMPAIGN_START = "GET_CAMPAIGN_START"
export const GET_CAMPAIGN_SUCCESS = "GET_CAMPAIGN_SUCCESS"
export const GET_CAMPAIGN_FAILURE = "GET_CAMPAIGN_FAILURE"

export const getCampaign = (id) => dispatch => {
    dispatch({ type: GET_CAMPAIGN_START })
    axiosWithAuth()
        .get(`organizations/${id}/campaigns`)
        .then(res => {
            dispatch({ type: GET_CAMPAIGN_SUCCESS, payload: res.data })
        })
        .catch(error =>
            dispatch({ type: GET_CAMPAIGN_FAILURE, payload: error })
        )
}

export const NEW_CAMPAIGN_START = "NEW_CAMPAIGN_START"
export const NEW_CAMPAIGN_SUCCESS = "NEW_CAMPAIGN_SUCCESS"
export const NEW_CAMPAIGN_FAILURE = "NEW_CAMPAIGN_FAILURE"

export const createCampaign = (newCamp) => dispatch => {
    dispatch({ type: NEW_CAMPAIGN_START })
    axiosWithAuth()
        .post('campaigns', newCamp)
        .then(res => {
            dispatch({ type: NEW_CAMPAIGN_SUCCESS, payload: res.data }) 
        })
        .catch(err =>
            dispatch({ type: NEW_CAMPAIGN_FAILURE, payload: err })
        )

}

export const UPDATE_CAMPAIGN_START = "UPDATE_CAMPAIGN_START"
export const UPDATE_CAMPAIGN_SUCCESS = "UPDATE_CAMPAIGN_SUCCESS"
export const UPDATE_CAMPAIGN_FAILURE = "UPDATE_CAMPAIGN_FAILURE"

export const updateCampaign = (id, campChanges) => dispatch => {
    dispatch({ type: UPDATE_CAMPAIGN_START })
    axiosWithAuth()
        .put(`campaigns/${id}`, campChanges)
        .then(res => {
            dispatch({ type: UPDATE_CAMPAIGN_SUCCESS, payload: res.data })
        })
        .catch(err =>
            dispatch({ type: UPDATE_CAMPAIGN_FAILURE, payload: err })
        )
}

export const DELETE_CAMPAIGN_START = "DELETE_CAMPAIGN_START"
export const DELETE_CAMPAIGN_SUCCESS = "DELETE_CAMPAIGN_SUCCESS"
export const DELETE_CAMPAIGN_FAILURE = "DELETE_CAMPAIGN_FAILURE"

export const deleteCampaign = (id) => dispatch => {
    dispatch({type: DELETE_CAMPAIGN_START})
    axiosWithAuth()
        .delete(`campaigns/${id}`)
        .then(res => {
            console.log('deleteCAMPAIGN', res)
            dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: DELETE_CAMPAIGN_FAILURE, payload: err}))
}