import { connect } from "react-redux";
import { setConvertInput } from "../../actions";
import { TextField } from "@mui/material";

const ConvertInput = ({userInputConvert, setConvertInput}) => {

    const changeHandler = e => {
        setConvertInput(e.target.value);
    }

    return (
        <TextField id="standard-basic" variant="standard" type="number"
                   value={userInputConvert || ''}
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