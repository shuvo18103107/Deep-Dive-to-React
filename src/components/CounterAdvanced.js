import { useContext } from 'react';
import contextObj from '../lib/contextAPi';
// eslint-disable-next-line react/function-component-definition
export default function CounterAdvanced() {
    const { counter, dispatchPass } = useContext(contextObj);

    return (
        <div>
            <div>Count - {counter}</div>
            <button type="button" onClick={() => dispatchPass('increment')}>
                Increment by 1
            </button>
            <button type="button" onClick={() => dispatchPass('decrement')}>
                Decrement by 1
            </button>
        </div>
    );
}
