import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initState = {
    loggedIn: false,
    user: null,
    errors: null
}

export const loginReducer = (state = initState, { type, payload }) => {
    switch(type){
        case LOGIN_START:
            return {
                ...state,
                loggedIn: false,
                user: null,
                errors: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: payload,
                errors: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                user: null,
                errors: payload
            }
        default:
            return state
    }
}