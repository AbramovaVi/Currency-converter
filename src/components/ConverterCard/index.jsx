import { useEffect } from "react";
import styles from './ConverterCard.module.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {setBase, setConvertTo} from "../../reducers/reducer";
import { BaseSelect,ConvertSelect } from "../Select";
import { BaseInput, ConvertInput } from "../Input/index.jsx";
import {setConvertInput, setOutput, setUserInput} from "../../actions";

const API_KEY2 = '26f246574d-fe5c3fbb80-r7gvsq';

const ConverterCard = ({title, initialCurrency, base, convertList, convertTo}) => {
    const fromCurrency = useSelector(state => state.base);
    const dispatch = useDispatch();

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
                    className={styles.info}>
                    1
                    {base? fromCurrency.toUpperCase(): convertTo.toUpperCase()}
                    = {base? convertList[convertTo] + convertTo : (1 / convertList[convertTo]).toFixed(2) + fromCurrency}
                </span>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        convertList: state.convertList,
        convertTo: state.convertTo,
        userConvertInput: state.userConvertInput
    }
}

const mapDispatchToProps = {
    setOutput,
    setUserInput,
    setConvertInput
}
export default connect(mapStateToProps)(ConverterCard);