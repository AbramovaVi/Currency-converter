import styles from "../ConverterCard/ConverterCard.module.css";
import {connect} from "react-redux";
import {setConvertTo, setOutput, setConvertInput, setUserInput} from "../../actions";

const ConvertSelect = ({ initialCurrency, currencyList, curs, userInput, setConvertTo, setOutput, setConvertInput, userConvertInput}) => {

    function selectHandler(e) {
        setConvertTo(e.target.value);
        let output = userInput * curs[e.target.value];
        setConvertInput(output);
    }

    return (
        <select onChange={selectHandler} className={styles.select}>
            { Object.keys(currencyList).map((keyName, i) => {
                return <option value={keyName} key={keyName} selected={keyName === initialCurrency}>{keyName.toUpperCase()}</option>
            })}
        </select>
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
    setOutput,
    setConvertTo,
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertSelect);