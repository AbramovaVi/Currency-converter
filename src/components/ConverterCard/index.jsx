import { useEffect } from "react";
import styles from './ConverterCard.module.css';
import { connect, useDispatch } from "react-redux";
import { setBase, setConvertTo } from "../../reducers/reducer";
import { BaseSelect,ConvertSelect } from "../Select";
import { BaseInput, ConvertInput } from "../Input";

const ConverterCard = ({ title, initialCurrency, base, convertList, convertTo, fromCurrency }) => {
    const dispatch = useDispatch();
    const SPACE = ' ';

    useEffect(() => {
        base ? dispatch(setBase(initialCurrency)) : dispatch(setConvertTo(initialCurrency));
    },[] );

    return (
        <div className={styles['card-container']}>
            <p className={styles.title}>{title}</p>
            <div className={styles.card}>
                {base ?
                    <BaseSelect initialCurrency={initialCurrency}/> : <ConvertSelect initialCurrency={initialCurrency}/>
                }
                {
                    base? <BaseInput/> : <ConvertInput/>
                }
                <p className={styles.info}>
                    1 {SPACE + (base?
                    fromCurrency.toUpperCase(): convertTo.toUpperCase()) + SPACE}
                    = {base?
                    convertList[convertTo] + SPACE + convertTo : (1 / convertList[convertTo]).toFixed(2) + SPACE + fromCurrency}
                </p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        convertList: state.convertList,
        convertTo: state.convertTo,
        userConvertInput: state.userConvertInput,
        fromCurrency: state.base
    }
}

export default connect(mapStateToProps)(ConverterCard);