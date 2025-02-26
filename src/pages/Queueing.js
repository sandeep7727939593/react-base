import { useState } from "react";

const Queueing = () => {

    const [number, setNumber] = useState(0);

    function handleClick() {
        setNumber(n => n +1);
        setNumber(n => n +1);
        setNumber(n => n +1);
    }
    return <div>
        <h1>Queueing a Series of State Updates</h1>
        <p>{number}</p>
        <button onClick={handleClick}>+3 click</button>
    </div>
}

export default Queueing;