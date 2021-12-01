import { useReducer } from 'react';
// eslint-disable-next-line react/function-component-definition
const initialState = {
    count: 0,
    count2: 0,
};
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState, count: currentState.count + action.value };
        case 'decrement':
            return { ...currentState, count: currentState.count - action.value };
        case 'counter2':
            return { ...currentState, count2: currentState.count2 + action.value }; // ekhane amader kintu protistate change ei pura updated obj ta pathate hobe jodi ekta update kori taile bakigiula undefined thakbe
        default:
            return currentState.count;
    }
};
// eslint-disable-next-line react/function-component-definition
export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count.count}</div>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment by 1
            </button>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment by 5
            </button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement by 1
            </button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                Decrement by 5
            </button>
            <br />
            <br />
            <br />
            <div>counter 2 : {count.count2}</div>
            <br />
            <br />
            <button type="button" onClick={() => dispatch({ type: 'counter2', value: 1 })}>
                Counter 2
            </button>
        </div>
    );
}
