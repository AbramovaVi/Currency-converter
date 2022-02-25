import { connect } from "react-redux";
import store from "../../store";
import { setBase, setConvertInput, setConvertList, setUserInput } from "../../actions";
import { MenuItem, TextField } from "@mui/material";

const API_KEY2 = '9639589b8b-18d114e438-r7umcj';

const BaseSelect = ({initialCurrency, currencyList, setUserInput, userInput, setConvertList, setBase}) => {

    function selectHandler(e) {
        setBase(e.target.value);
        let base = store.getState().base;
        fetch(`https://api.fastforex.io/fetch-all?from=${base}&api_key=${API_KEY2}`)
            .then( res => {
                return res.json();
            }).then( res => {
                setConvertList(res);
                setUserInput(userInput)
        });
    }

    return (
        <TextField
            select
            variant="filled"
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
        convertTo : state.convertTo,
        currencyList: state.currencyList,
        userInput: state.userInput,
        userConvertInput: state.userInputConvert,
        convertList: state.convertList
    }
}

const mapDispatchToProps = {
    setConvertList,
    setBase,
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseSelect);