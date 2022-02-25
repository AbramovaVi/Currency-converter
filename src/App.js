import './App.css';
import { useEffect } from "react";
import { setConvertList, setData } from "./reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import Converter from "./components/Converter";

const API_KEY2 = '9639589b8b-18d114e438-r7umcj';

function App() {
    const dispatch = useDispatch();
    const base = useSelector(state => state.base);
    const convertTo = useSelector(state => state.convertTo);

    useEffect(() => {
        fetch(`https://api.fastforex.io/currencies?api_key=${API_KEY2}`)
             .then(res => res.json()).then(res => {
             dispatch(setData(res.currencies));
         })
        fetch(`https://api.fastforex.io/fetch-all?from=${base}&api_key=${API_KEY2}`)
            .then(res => res.json()).then(res => {
            dispatch(setConvertList(res.results));
        })
    },[base, convertTo] );



    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>Конвертер валют</h1>
            <Converter />
        </div>
    );
}

export default App;
