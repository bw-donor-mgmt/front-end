import {
    GET_ALL_DONOR_START,
    GET_ALL_DONOR_SUCCESS,
    GET_ALL_DONOR_FAILURE,
    GET_DONOR_START,
    GET_DONOR_SUCCESS,
    GET_DONOR_FAILURE,
    NEW_DONOR_START,
    NEW_DONOR_SUCCESS,
    NEW_DONOR_FAILURE,
    UPDATE_DONOR_START,
    UPDATE_DONOR_SUCCESS,
    UPDATE_DONOR_FAILURE,
    DELETE_DONOR_START,
    DELETE_DONOR_SUCCESS,
    DELETE_DONOR_FAILURE
} from '../actions'

const initState = {
    isLoading: false,
    allDonorData: [],
    donorData: [],
    errors: null
}

export const donorReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALL_DONOR_START:
            return {
                ...state,
                isLoading: true,
                allDonorData: [],
                errors: null
            }
        case GET_ALL_DONOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allDonorData: payload,
                errors: null
            }
        case GET_ALL_DONOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                allDonorData: [],
                errors: payload
            }
        case GET_DONOR_START:
            return {
                ...state,
                isLoading: true,
                donorData: [],
                errors: null
            }
        case GET_DONOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                donorData: payload,
                errors: null
            }
        case GET_DONOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                donorData: [],
                errors: payload
            }
        case NEW_DONOR_START:
            return {
                ...state,
                isLoading: true,
                errors: null
            }
        case NEW_DONOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null
            }
        case NEW_DONOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case UPDATE_DONOR_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_DONOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case UPDATE_DONOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case DELETE_DONOR_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_DONOR_SUCCESS:
            const { allDonorData } = state
            const newDonorData = allDonorData.filter(donor => {
                return donor.id !== payload[0].id
            })
            return {
                ...state,
                allDonorData: [...newDonorData],
                isLoading: false
            }
        case DELETE_DONOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}
