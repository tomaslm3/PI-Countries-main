import axios from "axios";

export const actions = {
    GET_ALL_COUNTRIES: 'GET_ALL_COUNTRIES',
    GET_COUNTRIES_BY_NAME: 'GET_COUNTRIES_BY_NAME',
    GET_COUNTRY_BY_ID: 'GET_COUNTRY_BY_ID',
    POST_ACTIVITY: 'POST_ACTIVITY',
    BY_NAME_ASC: 'BY_NAME_ASC',
    BY_NAME_DESC: 'BY_NAME_DESC',
    BY_MAX_POPULATION: 'BY_MAX_POPULATION',
    BY_MIN_POPULATION: 'BY_MIN_POPULATION',
    BY_CONTINENT: 'BY_CONTINENT',
    GET_ALL_ACTIVITIES: 'GET_ALL_ACTIVITIES',
    FILTER_BY_ACTIVITIES: 'FILTER_BY_ACTIVITIES'
};

const { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITY, BY_NAME_ASC, BY_NAME_DESC, BY_MAX_POPULATION, BY_MIN_POPULATION, BY_CONTINENT, GET_ALL_ACTIVITIES, FILTER_BY_ACTIVITIES } = actions;

// export function getAllCountries() {
//     return async function (dispatch) {
//         try {
//             var json = await axios.get('/countries')
//             return dispatch({
//                 type: GET_ALL_COUNTRIES,
//                 payload: json.data
//             })
//         } catch (error) {
//             console.log('Error action getAllCountries ' + error)
//         };
//     };
// };

export function getAllCountries() {
    return async function (dispatch) {
        try {
            axios.get('/countries')
            .then((response) => {return(dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
                    })
                )}
            )
            // return dispatch({
            // })
        } catch (error) {
            console.log('Error action getAllCountries ' + error)
        };
    };
};



export function getCountriesByName(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/countries?name=${payload}`)
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action getCountriesByName ' + error)
        };
    };
};

export function getCountryById(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/country/${payload}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action getCountryById ' + error)
        };
    };
};

export function postActivity(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.post('/activity', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action postActivity ' + error)
        };
    };
};

export function filterByNameAsc() {
    return async function (dispatch) {
        try {
            var json = await axios.get('/filters/asc')
            return dispatch({
                type: BY_NAME_ASC,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByNameAsc ' + error)
        };
    };
};

export function filterByNameDesc() {
    return async function (dispatch) {
        try {
            var json = await axios.get('/filters/desc')
            return dispatch({
                type: BY_NAME_DESC,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByNameDesc ' + error)
        };
    };
};

export function filterByMaxPopulation() {
    return async function (dispatch) {
        try {
            var json = await axios.get('/filters/maxPopulation')
            return dispatch({
                type: BY_MAX_POPULATION,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByMaxPopulation ' + error)
        };
    };
};

export function filterByMinPopulation() {
    return async function (dispatch) {
        try {
            var json = await axios.get('/filters/minPopulation')
            return dispatch({
                type: BY_MIN_POPULATION,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByMinPopulation ' + error)
        };
    };
};

export function filterByContinent(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/filters/continent/${payload}`)
            return dispatch({
                type: BY_CONTINENT,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByContinent ' + error)
        };
    };
};

export function getAllActivities() {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/activity`)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action filterByActivity ' + error)
        };
    };
};

export function filterByActivities(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: payload
    }
};