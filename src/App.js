import React from 'react';
import Counter from './components/counter';
import Todo from './components/Todo';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Todo />
                <Counter />
            </div>
        );
    }
}

export default App;
