import styles from "../ConverterCard/ConverterCard.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setOutput, setUserInput} from "../../reducers/reducer";
import {useEffect} from "react";
import store from "../../store";

export const BaseInput = () => {
    const convertTo = useSelector(state => state.convertTo);
    const curs = useSelector(state => state.convertList);
    const test = useSelector(state => state.userInput);
    const dispatch = useDispatch();
    useEffect( () => {
        // console.log(userInput)
        // dispatch(setOutput(userInput*curs[convertTo]));
    })
    const mapStateToProps = (state) => {
        console.log(state)
    }
    const changeHandler = e => {
        let num = e.target.value * curs[convertTo];
        dispatch(setOutput(num))
        let input = e.target.value;
        // console.log(num);
        dispatch(setUserInput(input));
        mapStateToProps(store.getState())
    }
    return (
        <input
            type="number"
            placeholder="0"
            onChange={changeHandler}
            className={styles.input}
        />
    )
}