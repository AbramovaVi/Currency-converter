import { connect } from "react-redux";
import { setConvertTo, setConvertInput, setUserInput } from "../../actions";
import { MenuItem, TextField } from "@mui/material";

const ConvertSelect = ({ initialCurrency, currencyList, curs, userInput, setConvertTo, setConvertInput }) => {

    function selectHandler(e) {
        setConvertTo(e.target.value);
        let output = userInput * curs[e.target.value];
        setConvertInput(output);
    }

    return (
        <TextField
            variant="filled"
            select
            value={initialCurrency}
            onChange={selectHandler}
            helperText="Please select your currency"
        >
            { Object.keys(currencyList).map((keyName) => {
                return <MenuItem value={keyName} key={keyName}>{keyName.toUpperCase()}</MenuItem>
            })}
        </TextField>
    )
}

const mapStateToProps = (state) => {
    return {
        currencyList: state.currencyList,
        curs: state.convertList,
        userInput: state.userInput,
        userConvertInput: state.userInputConvert,
        test: state.convertTo
    }
}

const mapDispatchToProps = {
    setConvertTo,
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertSelect);