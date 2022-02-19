import styles from "../ConverterCard/ConverterCard.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setConvertTo, setOutput} from "../../reducers/reducer";
import store from "../../store";

export const ConvertSelect = ({initialCurrency}) => {
    const currencyList = useSelector(state => state.currencyList);
    const dispatch = useDispatch();
    const curs = useSelector(state => state.convertList)

    function selectHandler(e) {
        dispatch(setConvertTo(e.target.value));
        let output = store.getState().userInput * curs[e.target.value];
        dispatch(setOutput(output));
    }

    return (
        <select onChange={selectHandler} className={styles.select}>
            { Object.keys(currencyList).map((keyName, i) => {
                return <option value={keyName} key={keyName} selected={keyName === initialCurrency}>{keyName.toUpperCase()}</option>
            })}
        </select>
    )
}