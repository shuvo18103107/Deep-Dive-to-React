import { React, useState } from 'react';
import MyComponent from './components/Mycomponent';

const App = function () {
    const [show, setShow] = useState(true);

    return (
        <div className="app">
            <div>{show && <MyComponent />}</div>
            <br />
            <br />
            <button type="button" onClick={() => setShow((prevstate) => !prevstate)}>
                {show ? 'Hide Post' : 'Show Post'}
            </button>
        </div>
    );
};

export default App;

// ekhane jokhn amra timer ta on korci mycomponent e tokhn app theke button click e  umount hoye jaowar por o kintu timer er state ta change hocee background e. tai warning dicee Can't perform a React state update on an unmounted component, tai timer bondo na korle memeory leak hoye jete pare
// eta class component e solved kora jai componentwillunmount diye , cg ekta component jokhn unmount hoi tokhn eta call hoi
