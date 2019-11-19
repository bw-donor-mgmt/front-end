import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const postLogin = (user) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('/auth/login', user)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error }))
}

export const SIGNUP_START = "SIGNUP_START"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const postSignup = (user) => dispatch => {
    dispatch({ type: SIGNUP_START })
    axiosWithAuth()
        .post('/auth/register', user)
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: SIGNUP_FAILURE, payload: err.response }))
}