import {
    GET_CAMPAIGN_START,
    GET_CAMPAIGN_SUCCESS,
    GET_CAMPAIGN_FAILURE,
    NEW_CAMPAIGN_START,
    NEW_CAMPAIGN_SUCCESS,
    NEW_CAMPAIGN_FAILURE,
    UPDATE_CAMPAIGN_START,
    UPDATE_CAMPAIGN_SUCCESS,
    UPDATE_CAMPAIGN_FAILURE,
    DELETE_CAMPAIGN_START,
    DELETE_CAMPAIGN_SUCCESS,
    DELETE_CAMPAIGN_FAILURE
} from '../actions'

const initState = {
    isLoading: false,
    campData: [],
    errors: null
}

export const campReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CAMPAIGN_START:
            return {
                ...state,
                isLoading: true,
                campData: [],
                errors: null
            }
        case GET_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                campData: payload,
                errors: null
            }
        case GET_CAMPAIGN_FAILURE:
            return {
                ...state,
                isLoading: false,
                campData: [],
                errors: payload
            }
        case NEW_CAMPAIGN_START:
            return {
                ...state,
                isLoading: true,
                errors: null
            }
        case NEW_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null
            }
        case NEW_CAMPAIGN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case UPDATE_CAMPAIGN_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case UPDATE_CAMPAIGN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case DELETE_CAMPAIGN_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_CAMPAIGN_SUCCESS:
            const { campData } = state
            const newCampData = campData.filter(camp => {
                return camp.id !== payload[0]
            })
            return {
                ...state,
                campData: [...newCampData],
                isLoading: false
            }
        case DELETE_CAMPAIGN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}