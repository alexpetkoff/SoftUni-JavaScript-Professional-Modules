import { useState } from 'react';

export default function Timer(props) {
    
    const [count, setCount] = useState(props.timer);

    setTimeout(() => { //useEffect is more appropriate, but we haven't learned it yet! ;)
        
        setCount(count + 1);
   
    }, 1000);

    return (
        <div>
            Timer: {count}!
        </div>
    )

}