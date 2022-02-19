const defaultState = {
    currencyList: {},
    base: 'RUB',
    convertTo: 'USD',
    convertList: {},
    output: '',
    userInput: 0,
}

const SET_DATA = 'SET_DATA';
const SET_BASE = 'SET_BASE';
const SET_CONVERT_TO = 'SET_CONVERT_TO';
const SET_CONVERT_LIST = 'SET_CONVERT_FROM';
const SET_OUTPUT = 'SET_OUTPUT';
const SET_USER_INPUT = 'SET_USER_INPUT';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, currencyList: action.payload};
        case SET_BASE:
            return {...state, base: action.payload};
        case SET_CONVERT_TO:
            return {...state, convertTo: action.payload};
        case SET_CONVERT_LIST:
            return {...state, convertList: action.payload};
        case SET_OUTPUT:
            return {...state, output: action.payload.toFixed(2)};
        case SET_USER_INPUT:
            return {...state, userInput: action.payload}
        default: return state;
    }
}

export const setData = (payload) => ({type: SET_DATA, payload});
export const setBase = (payload) => ({type: SET_BASE, payload});
export const setConvertTo = (payload) => ({type: SET_CONVERT_TO, payload});
export const setConvertList = (payload) => ({type: SET_CONVERT_LIST, payload});
export const setOutput = (payload) => ({type: SET_OUTPUT, payload});
export const setUserInput = (payload) => ({type: SET_USER_INPUT, payload});