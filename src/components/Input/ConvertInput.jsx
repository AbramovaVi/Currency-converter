import { connect } from "react-redux";
import { setConvertInput } from "../../actions";
import { TextField } from "@mui/material";
import {useState} from "react";

const ConvertInput = ({userInputConvert, setConvertInput}) => {
    const [error, setError] = useState(false)

    const changeHandler = e => {
        setConvertInput(e.target.value);
        (isNaN(e.target.value)) ?  setError(true) : setError(false);
    }

    return (
        <TextField
            id="standard-basic"
            variant="standard"
            error = {error}
            helperText={ error ? 'Введите число' : ' '}
            type="number"
            value={ userInputConvert || '' }
            placeholder="0"
            onChange={changeHandler}
            sx = {{ width: '95%', margin: 'auto', fontSize: '36px'}}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        userInputConvert: state.userInputConvert,
    }
}

const mapDispatchToProps = {
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertInput);