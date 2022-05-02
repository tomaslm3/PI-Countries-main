import { actions } from "../actions";
const{ GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITY, BY_NAME_ASC, BY_NAME_DESC, BY_MAX_POPULATION, BY_MIN_POPULATION, BY_CONTINENT, GET_ALL_ACTIVITIES, FILTER_BY_ACTIVITIES } = actions

const initialState = {
    allCountries: [],
    byNameCountries: [],
    backUpCountries: [],
    country: [],
    allActivities: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                byNameCountries: [],
                country: [],
                backUpCountries: action.payload
            };
        case GET_COUNTRIES_BY_NAME:
            console.log(action.payload)
            if(action.payload){
                return {
                    ...state,
                    byNameCountries: action.payload
                };
            } else {
                return{
                    ...state,
                    byNameCountries: []
                }
            }
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            };
        case POST_ACTIVITY:
            return {
                ...state,
            };
        case BY_NAME_ASC:
            return {
                ...state,
                allCountries: action.payload
            };
        case BY_NAME_DESC:
            return {
                ...state,
                allCountries: action.payload
            }
        case BY_MAX_POPULATION:
            return {
                ...state,
                allCountries: action.payload
            }
        case BY_MIN_POPULATION:
            return {
                ...state,
                allCountries: action.payload
            }
        case BY_CONTINENT:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            }
        case FILTER_BY_ACTIVITIES:
            if(action.payload.length !== 0){
                const selectedActivities = action.payload
                const filterActivities = state.backUpCountries.filter((country) => {
                    return selectedActivities.every(i => country.activities.map(activity => activity.name).includes(i))
                })
                return{
                    ...state,
                    allCountries: filterActivities
                }
            } else{
                return {
                    ...state,
                    allCountries: state.backUpCountries
                }        
            }
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;