import styles from "../ConverterCard/ConverterCard.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setBase, setConvertList, setOutput} from "../../reducers/reducer";
import store from "../../store";

const API_KEY2 = '26f246574d-fe5c3fbb80-r7gvsq';

export const BaseSelect = ({initialCurrency}) => {
    // const base = useSelector(state => state.base);
    const currencyList = useSelector(state => state.currencyList);
    const userInput = useSelector(state => state.userInput);
    const curs = useSelector(state => state.convertList);
    const convertTo = useSelector(state => state.convertTo);
    const dispatch = useDispatch();

    function selectHandler(e) {
        dispatch(setBase(e.target.value));
        let base = store.getState().base;
        fetch(`https://api.fastforex.io/fetch-all?from=${base}&api_key=${API_KEY2}`)
            .then( res => {
                return  res.json();
            }).then( res => {
                console.log(userInput, curs[convertTo],res.results[convertTo], res.results);
            dispatch(setConvertList(res));
            dispatch(setOutput(store.getState().userInput * res.results[convertTo]));
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