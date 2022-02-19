import { connect } from "react-redux";
import { setUserInput, setConvertInput } from '../../actions';
import { TextField } from "@mui/material";

const BaseInput = ({ userInput, setUserInput }) => {

    const changeHandler = e => {
        setUserInput(e.target.value);
    }
    return (
        <TextField id="standard-basic" variant="standard" type="number"
                   placeholder="0"
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