import ConverterCard from "../ConverterCard";
import switcher from "../../img/switcher.png";
import styles from './Converter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setBase, setConvertTo} from "../../reducers/reducer";

const Converter = () => {
    const dispatch = useDispatch();
    const base = useSelector(state => state.base);
    const convertTo = useSelector(state => state.convertTo);

    const currencyChanger = () => {
        dispatch(setBase(convertTo));
        dispatch(setConvertTo(base));
    }

    return (
        <div className={styles.Converter}>
            <ConverterCard
                title="У меня есть"
                initialCurrency={base}
                base = 'true'
            />
            <img src={switcher} onClick={currencyChanger} alt='Поменять валюты местами' className={styles['switcher-img']}/>
            <ConverterCard
                title="Я получу"
                initialCurrency={convertTo}
            />
        </div>
    )
}

export default Converter;