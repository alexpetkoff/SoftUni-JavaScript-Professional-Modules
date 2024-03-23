import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const resetHandler = () => {
        dispatch(counterActions.reset());
    };

    const toggle = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>

            {showCounter && <div className={classes.value}>{counter}</div>}

            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
            <button onClick={toggle}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
