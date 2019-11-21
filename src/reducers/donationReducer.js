import {
    GET_DONATION_START,
    GET_DONATION_SUCCESS,
    GET_DONATION_FAILURE,
    NEW_DONATION_START,
    NEW_DONATION_SUCCESS,
    NEW_DONATION_FAILURE,
    UPDATE_DONATION_START,
    UPDATE_DONATION_SUCCESS,
    UPDATE_DONATION_FAILURE,
    DELETE_DONATION_START,
    DELETE_DONATION_SUCCESS,
    DELETE_DONATION_FAILURE
} from '../actions'

const initState = {
    isLoading: false,
    donationData: [],
    errors: null
}

export const donationReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DONATION_START:
            return {
                ...state,
                isLoading: true,
                donationData: [],
                errors: null
            }
        case GET_DONATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                donationData: payload,
                errors: null
            }
        case GET_DONATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                donationData: [],
                errors: payload
            }
        case NEW_DONATION_START:
            return {
                ...state,
                isLoading: true,
                errors: null
            }
        case NEW_DONATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null
            }
        case NEW_DONATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case UPDATE_DONATION_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_DONATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case UPDATE_DONATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case DELETE_DONATION_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_DONATION_SUCCESS:
            const { donationData } = state
            const newDonationData = donationData.filter(donation => {
                return donation.id !== payload[0]
            })
            return {
                ...state,
                donationData: [...newDonationData],
                isLoading: false
            }
        case DELETE_DONATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}