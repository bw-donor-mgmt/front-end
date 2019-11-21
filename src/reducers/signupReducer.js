import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../actions'

const initState = {
    user: null,
    errors: null
}

export const signupReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SIGNUP_START:
            return {
                ...state,
                user: null,
                errors: null
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: payload,
                errors: null
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                user: null,
                errors: payload
            }
        default:
            return state
    }
}