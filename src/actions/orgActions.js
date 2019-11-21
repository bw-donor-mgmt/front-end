import { axiosWithAuth } from '../Utils/AxiosWithAuth'

export const GET_ORG_START = "GET_ORG_START"
export const GET_ORG_SUCCESS = "GET_ORG_SUCCESS"
export const GET_ORG_FAILURE = "GET_ORG_FAILURE"

export const getOrg = () => dispatch => {
    dispatch({ type: GET_ORG_START })
    axiosWithAuth()
        .get(`organizations`)
        .then(response => {
            dispatch({ type: GET_ORG_SUCCESS, payload: response.data })
        }
        )
        .catch(error =>
            dispatch({ type: GET_ORG_FAILURE, payload: error })
        )
}

export const NEW_ORG_START = "NEW_ORG_START"
export const NEW_ORG_SUCCESS = "NEW_ORG_SUCCESS"
export const NEW_ORG_FAILURE = "NEW_ORG_FAILURE"

export const createOrg = (newOrg) => dispatch => {
    dispatch({ type: NEW_ORG_START })
    axiosWithAuth()
        .post('organizations', newOrg)
        .then(res => { 
            dispatch({ type: NEW_ORG_SUCCESS, payload: res.data }) 
        })
        .catch(err =>
            dispatch({ type: NEW_ORG_FAILURE, payload: err })
        )

}

export const UPDATE_ORG_START = "UPDATE_ORG_START"
export const UPDATE_ORG_SUCCESS = "UPDATE_ORG_SUCCESS"
export const UPDATE_ORG_FAILURE = "UPDATE_ORG_FAILURE"

export const updateOrg = (id, orgChanges) => dispatch => {
    dispatch({ type: UPDATE_ORG_START })
    axiosWithAuth()
        .put(`organizations/${id}`, orgChanges)
        .then(res => {
            console.log('updateOrg', res)
            dispatch({ type: UPDATE_ORG_SUCCESS, payload: res.data })
        })
        .catch(err =>
            dispatch({ type: UPDATE_ORG_FAILURE, payload: err })
        )
}

export const DELETE_ORG_START = "DELETE_ORG_START"
export const DELETE_ORG_SUCCESS = "DELETE_ORG_SUCCESS"
export const DELETE_ORG_FAILURE = "DELETE_ORG_FAILURE"

export const deleteOrg = (id) => dispatch => {
    dispatch({type: DELETE_ORG_START})
    axiosWithAuth()
        .delete(`organizations/${id}`)
        .then(res => {
            console.log('deleteOrg', res)
            dispatch({ type: DELETE_ORG_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: DELETE_ORG_FAILURE, payload: err}))
}