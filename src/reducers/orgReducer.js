import {
    GET_ORG_START,
    GET_ORG_SUCCESS,
    GET_ORG_FAILURE,
    NEW_ORG_START,
    NEW_ORG_SUCCESS,
    NEW_ORG_FAILURE
} from '../actions'

const initState = {
    isLoading: false,
    orgData: [],
    errors: null
}

export const orgReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ORG_START:
            return {
                ...state,
                isLoading: true,
                orgData: [],
                errors: null
            }
        case GET_ORG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orgData: payload,
                errors: null
            }
        case GET_ORG_FAILURE:
            return {
                ...state,
                isLoading: false,
                orgData: [],
                errors: payload
            }
        case NEW_ORG_START:
            return {
                ...state,
                isLoading: true,
                errors: null
            }
        case NEW_ORG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orgData: payload,
                errors: null
            }
        case NEW_ORG_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}
