import { actions } from "../actions";
const{ GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITY } = actions

const initialState = {
    allCountries: [],
    byNameCountries: [],
    country: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                byNameCountries: [],
                country: []
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                byNameCountries: action.payload
            };
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            };
        case POST_ACTIVITY:
            return {
                ...state,
            };
            
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;