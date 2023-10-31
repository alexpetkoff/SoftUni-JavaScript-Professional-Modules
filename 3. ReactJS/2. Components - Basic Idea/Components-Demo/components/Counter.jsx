import { useState } from "react";

export default function Counter(props) {

    const [counter, useCounter] = useState(props.count);

    const onIncrement = () => {
        useCounter(c => c + 1);
    }

    const onDecrement = () => {
        useCounter(c => c - 1);
    }

    const onClear = () => {
        useCounter(0);
    }

    return (
        <div>
            <h2>This is my counter:</h2>

            {
                counter < 0
                    ? <p>Invalid Counter! Press Clear.</p>
                    : <p>{counter}</p>
            }

            <button onClick={onIncrement}>Add</button>
            <button disabled={counter <= 0} onClick={onDecrement}>Substract</button>
            <button disabled={counter == 0} onClick={onClear}>Clear</button>

        </div>
    );
}