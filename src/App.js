import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import percel from './lib/Context';
// eslint - disable - next - line;

class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCounter) => (
                        <ClickCounter count={counter} incrementCount={incrementCounter} />
                    )}
                </Counter>
                <percel.Provider value={theme}>
                    <Section />
                </percel.Provider>
            </div>
        );
    }
}

export default App;
