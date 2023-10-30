import { useState } from 'react';

export default function Timer(props) {
    
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(count + 1);
   
    }, 1000);


    return (
        <div>
            Timer: {count}!
        </div>
    )

}