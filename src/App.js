import './App.css';
import { useEffect } from "react";
import ConverterCard from './components/ConverterCard';
import data from './data.json';
import {setBase, setConvertList, setConvertTo, setData} from "./reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import switcher from './img/switcher.png';

// const API_KEY = '0cbe3b70d79a941b695c';
const API_KEY2 = '26f246574d-fe5c3fbb80-r7gvsq';

function App() {
    const dispatch = useDispatch();
    const output = useSelector(state => state.output);
    const base = useSelector(state => state.base);
    const convertTo = useSelector(state => state.convertTo);
    const curs = useSelector(state => state.convertList);

    useEffect(() => {
        // fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`)
        //     .then(res => res.json()).then(res => {
        //     console.log(res);
        //     setCurrencyList(res);
        // })
        fetch(`https://api.fastforex.io/currencies?api_key=${API_KEY2}`)
             .then(res => res.json()).then(res => {
             dispatch(setData(res.currencies));
         })
        fetch(`https://api.fastforex.io/fetch-all?from=${base}&api_key=${API_KEY2}`)
            .then(res => res.json()).then(res => {
            dispatch(setConvertList(res.results));
            // console.log(res);
        })
        // setCurrencyList(data);
    },[base, convertTo] );

    const mapStateToProps = (state) => {
        console.log(state)
    }

    const currencyChanger = () => {
        dispatch(setBase(convertTo));
        dispatch(setConvertTo(base));
        // console.log(store.getState().lastChangedInput);
        // dispatch(setUserInput(store.getState().userInput))
        // store.getState().lastChangedInput === 'base-input' ? dispatch(setUserInput(store.getState().userInput)) : dispatch(setConvertInput(5));
        // let output = store.getState().userInput * (1 / curs[convertTo]);
        // dispatch(setOutput(output));
    }

    return (
        <div className="App" style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <ConverterCard
                title="У меня есть"
                initialCurrency={base}
                base = 'true'
            />
            <img src={switcher} onClick={currencyChanger} alt='Поменять валюты местами'/>
            <ConverterCard
                title="Я получу"
                initialCurrency={convertTo}
            />
        </div>
    );
}

export default App;
