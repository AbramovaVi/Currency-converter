import { connect } from "react-redux";
import { setUserInput, setConvertInput } from '../../actions';
import { TextField } from "@mui/material";
import { useState } from "react";

const BaseInput = ({ userInput, setUserInput }) => {
    const [error, setError] = useState(false)

    const changeHandler = e => {
        setUserInput(e.target.value);
        (isNaN(e.target.value)) ?  setError(true) : setError(false);
    }
    return (
        <TextField
            id="standard-basic"
            error = {error}
            variant="standard"
            type="number"
            placeholder="0"
            helperText={ error ? 'Введите число' : ' '}
            value={userInput}
            onChange={changeHandler}
            sx = {{ width: '95%', margin: 'auto', fontSize: '36px'}}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        convertTo : state.convertTo,
        curs: state.convertList,
        userInput: state.userInput
    }
}

const mapDispatchToProps = {
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseInput);