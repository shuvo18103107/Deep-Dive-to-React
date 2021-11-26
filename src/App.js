import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import percel from './lib/Context';
// eslint - disable - next - line;

class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return { theme: 'light' };
                }

                return { theme: 'dark' };
            });
        },
    };

    render() {
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCounter) => (
                        <ClickCounter count={counter} incrementCount={incrementCounter} />
                    )}
                </Counter>
                <percel.Provider value={this.state}>
                    <Section />
                </percel.Provider>
            </div>
        );
    }
}

export default App;
