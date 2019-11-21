import {
    GET_ORG_START,
    GET_ORG_SUCCESS,
    GET_ORG_FAILURE,
    NEW_ORG_START,
    NEW_ORG_SUCCESS,
    NEW_ORG_FAILURE,
    UPDATE_ORG_START,
    UPDATE_ORG_SUCCESS,
    UPDATE_ORG_FAILURE,
    DELETE_ORG_START,
    DELETE_ORG_SUCCESS,
    DELETE_ORG_FAILURE
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
                errors: null
            }
        case NEW_ORG_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case UPDATE_ORG_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_ORG_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case UPDATE_ORG_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case DELETE_ORG_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_ORG_SUCCESS:
            const { orgData } = state
            const newOrgData = orgData.filter(org => {
                return org.id !== payload[0]
            })
            return {
                ...state,
                orgData: [...newOrgData],
                isLoading: false
            }
        case DELETE_ORG_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}
