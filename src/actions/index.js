const setData = (payload) => {
    return {
        type: 'SET_DATA',
        payload
    }
}

const setUserInput = (payload) => {
    return {
        type: 'SET_USER_INPUT',
        payload
    }
}

const setConvertList = (payload) => {
    return {
        type: 'SET_CONVERT_LIST',
        payload
    }
}
//
const setBase = (payload) => {
    return {
        type: 'SET_BASE',
        payload
    }
}

const setConvertTo = (payload) => {
    return {
        type: 'SET_CONVERT_TO',
        payload
    }
}
const setConvertInput = (payload) => {
    return {
        type: 'SET_CONVERT_INPUT',
        payload
    }
}


export {
    setData,
    setUserInput,
    setConvertList,
    setBase,
    setConvertTo,
    setConvertInput
}