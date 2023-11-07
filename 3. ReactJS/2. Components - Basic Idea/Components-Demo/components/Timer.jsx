import { useState, useEffect } from 'react';

export default function Timer(props) {
    
    const [count, setCount] = useState(props.count);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);
    }, [count]);
   
    return (
        <div>
            Time spend on the page: {count}!
        </div>
    )

}