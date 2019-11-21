import { axiosWithAuth } from '../Utils/AxiosWithAuth'

export const GET_ORG_START = "GET_ORG_START"
export const GET_ORG_SUCCESS = "GET_ORG_SUCCESS"
export const GET_ORG_FAILURE = "GET_ORG_FAILURE"

export const getOrg = () => dispatch => {
    dispatch({ type: GET_ORG_START })
    axiosWithAuth()
        .get(`organizations`)
        .then(response => {
            console.log('state', response.data )
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
        .then(res =>
            dispatch({ type: NEW_ORG_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: NEW_ORG_FAILURE, payload: err })
        )

}