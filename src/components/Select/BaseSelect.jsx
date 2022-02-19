import styles from "../ConverterCard/ConverterCard.module.css";
import {connect} from "react-redux";
import store from "../../store";
import {setBase, setConvertInput, setConvertList, setOutput, setUserInput} from "../../actions";


const API_KEY2 = '26f246574d-fe5c3fbb80-r7gvsq';

const BaseSelect = ({initialCurrency, currencyList, setUserInput, convertTo, userInput, userConvertInput, setConvertList, setBase, setConvertInput}) => {

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
        <select onChange={selectHandler} className={styles.select}>
            { Object.keys(currencyList).map((keyName, i) => {
                return <option value={keyName} key={keyName} selected={keyName === initialCurrency}>{keyName.toUpperCase()}</option>
            })}
        </select>
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
    setOutput,
    setConvertList,
    setBase,
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseSelect);