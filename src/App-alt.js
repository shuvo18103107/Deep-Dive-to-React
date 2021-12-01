import { useReducer } from 'react';
import CounterAdvanced from './components/CounterAdvanced';
import contextObj from './lib/contextAPi';

const initialState = 0;
// similar functionality thakle evabe kaj kora jai
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;

        default:
            return currentState;
    }
};
const App = function () {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <contextObj.Provider value={{ counter: count, dispatchPass: dispatch }}>
                <CounterAdvanced />
            </contextObj.Provider>
        </div>
    );
};

export default App;
