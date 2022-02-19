import styles from "../ConverterCard/ConverterCard.module.css";
import { connect } from "react-redux";
import { setUserInput, setOutput, setConvertInput } from '../../actions';
import store from "../../store";

const BaseInput = ({ userInput, setUserInput }) => {

    const changeHandler = e => {
        // let num = e.target.value * curs[convertTo];
        // setOutput(num);
        // let input = e.target.value;
        // setUserInput(input);
        // console.log(input)
        setUserInput(e.target.value);
        console.log(store.getState().lastChangedInput);
    }
    return (
        <input
            type="number"
            placeholder="0"
            value={userInput}
            onChange={changeHandler}
            className={styles.input}
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
    setOutput,
    setUserInput,
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseInput);