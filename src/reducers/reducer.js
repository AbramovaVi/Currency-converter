const defaultState = {
    currencyList: {},
    base: 'RUB',
    convertTo: 'USD',
    convertList: {},
    userInput: '',
    userInputConvert: '',
    lastChangedInput: ''
}

const SET_DATA = 'SET_DATA';
const SET_BASE = 'SET_BASE';
const SET_CONVERT_TO = 'SET_CONVERT_TO';
const SET_CONVERT_LIST = 'SET_CONVERT_FROM';
const SET_USER_INPUT = 'SET_USER_INPUT';
const SET_CONVERT_INPUT = 'SET_CONVERT_INPUT';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, currencyList: action.payload};
        case SET_BASE:
            return {...state, base: action.payload};
        case SET_CONVERT_TO:
            return {...state, convertTo: action.payload};
        case SET_CONVERT_LIST:
            return {...state,
                convertList: action.payload,
                userInputConvert: (state.userInput * action.payload[state.convertTo]).toFixed(2)
            };
        case SET_USER_INPUT:
            return {...state,
                userInput: action.payload,
                userInputConvert: (action.payload * state.convertList[state.convertTo]).toFixed(2),
                lastChangedInput: 'base-input'
            };
        case SET_CONVERT_INPUT:
            return {
                ...state,
                userInputConvert: action.payload,
                userInput: (action.payload / state.convertList[state.convertTo]).toFixed(2),
                lastChangedInput: 'convert-input'
            }
        default: return state;
    }
}

export const setData = (payload) => ({type: SET_DATA, payload});
export const setBase = (payload) => ({type: SET_BASE, payload});
export const setConvertTo = (payload) => ({type: SET_CONVERT_TO, payload});
export const setConvertList = (payload) => ({type: SET_CONVERT_LIST, payload});
export const setConvertInput = (payload) => ({type: SET_CONVERT_INPUT, payload});
export const setUserInput = (payload) => ({type: SET_USER_INPUT, payload});