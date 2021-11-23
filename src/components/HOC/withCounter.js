import React from 'react';

export default function withCounter(OriginalComponent) {
    class NewComponent extends React.Component {
        state = { count: 0 };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;

            return <OriginalComponent value={count} handler={this.incrementCount} />;
        }
    }
    return NewComponent;
}
