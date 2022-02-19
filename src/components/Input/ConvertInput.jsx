import styles from "../ConverterCard/ConverterCard.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setUserInput} from "../../reducers/reducer";
import store from "../../store";

export const ConvertInput = () => {
    const output = useSelector(state => state.output);
    // const base = useSelector(state => state.base);
    const convertTo = useSelector(state => state.convertTo);
    const curs = useSelector(state => state.convertList);
    const userInput = useSelector(state => state.userInput);
    const dispatch = useDispatch();
    const [value, setValue] = useState(output);

    const mapStateToProps = (state) => {
            console.log(state)
    }


    // useEffect(() => {
        // if (userInput)
        //     {
        //         setValue((userInput)*curs[convertTo]);
        //         // dispatch(setUserInput(0));
        //     } else setValue(output);
        // console.log(userInput);
        // mapStateToProps(store.getState());
    // }, [output])


    const changeHandler = e => {
        // console.log((1 / curs[convertTo]) * e.target.value);
    }
    return (
        <input
            type="number"
            value={output}
            readOnly={true}
            placeholder="0"
            // onChange={changeHandler}
            className={styles.input}
        />
    )
}