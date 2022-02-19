import { useEffect, useState } from "react";
import styles from './ConverterCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import {setBase, setConvertTo} from "../../reducers/reducer";
import { BaseSelect } from "../Select/BaseSelect";
import { ConvertSelect } from "../Select/ConvertSelect";
import {BaseInput} from "../Input/BaseInput";
import {ConvertInput} from "../Input/ConvertInput";

const API_KEY2 = '26f246574d-fe5c3fbb80-r7gvsq';

const ConverterCard = ({title, initialCurrency, base}) => {
    // const [userInput, setUserInput] = useState('1');
    const fromCurrency = useSelector(state => state.base);
    const convertTo = useSelector(state => state.convertTo);
    const dispatch = useDispatch();
    // const output = useSelector(state => state.output);
    const userInput = useSelector(state => state.userInput);

    const values = useSelector(state => state.convertList);

    useEffect(() => {
        base ? dispatch(setBase(initialCurrency)) : dispatch(setConvertTo(initialCurrency));
        // setCurrencyList(data);
    },[] );

    return (
        <div>
            <p className={styles.title}>{title}</p>
            <div className={styles.card}>
                {base ?
                    <BaseSelect initialCurrency={initialCurrency}/> : <ConvertSelect initialCurrency={initialCurrency}/>
                }
                {
                    base? <BaseInput/> : <ConvertInput/>
                }
                <span
                    className={styles.info}>1
                    {base? fromCurrency.toUpperCase(): convertTo.toUpperCase()}
                    = {base? values[convertTo] + convertTo : (1 / values[convertTo]).toFixed(2) + fromCurrency}
                </span>
            </div>
        </div>
    )
}

export default ConverterCard;