import { useEffect, useRef } from 'react';
import Input from './Input';
// eslint-disable-next-line react/function-component-definition
export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        // component did load
        console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            {/* <p>
                <input type="text" ref={inputRef} placeholder="enter something" />
            </p> */}
            <Input type="text" placeholder="Enter Something" ref={inputRef} />
        </div>
    );
}
