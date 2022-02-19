import styles from "../ConverterCard/ConverterCard.module.css";
import {connect} from "react-redux";
import {setConvertInput} from "../../actions";
import store from "../../store";

const ConvertInput = ({userInputConvert, setConvertInput, test}) => {
    // console.log(test, userInputConvert);

    const changeHandler = e => {
        setConvertInput(e.target.value);
        console.log(store.getState().lastChangedInput);
    }

    return (
        <input
            type="number"
            value={userInputConvert || ''}
            // readOnly={true}
            placeholder="0"
            onChange={changeHandler}
            className={styles.input}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        userInputConvert: state.userInputConvert,
        test: state.convertList
    }
}

const mapDispatchToProps = {
    setConvertInput
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertInput);