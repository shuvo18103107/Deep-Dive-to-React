/* eslint-disable prettier/prettier */
import { useState } from 'react';

const Counter = function () {
    const [counter, setCounter] = useState(0);
    const addNumber = () => {
        // eslint-disable-next-line no-plusplus
        // setCounter(counter+1)
        setCounter((prevState)=>prevState+1)
    };
    return (
        <div>
            <h1>{counter}</h1>
            <hr />
            <button type="button" onClick={addNumber}>
                Add 1
            </button>
        </div>
    );
};
export default Counter; 
