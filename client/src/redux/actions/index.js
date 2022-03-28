import axios from "axios";

export const actions = {
    GET_ALL_COUNTRIES: 'GET_ALL_COUNTRIES',
    GET_COUNTRIES_BY_NAME: 'GET_COUNTRIES_BY_NAME',
    GET_COUNTRY_BY_ID: 'GET_COUNTRY_BY_ID',
    POST_ACTIVITY: 'POST_ACTIVITY'
};

const { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITY } = actions;

export function getAllCountries() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action getAllCountries ' + error)
        };
    };
};

export function getCountriesByName(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/countries?name=${payload}`)
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
            var json = await axios.get(`http://localhost:3001/country/${payload}`)
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
            var json = await axios.post('http://localhost:3001/activity', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action postActivity ' + error)
        };
    };
};