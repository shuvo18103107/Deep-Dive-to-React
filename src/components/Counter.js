import React from 'react';

class Counter extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        const { render } = this.props;
        return render(count, this.incrementCount);
    }
}

export default Counter;

// ekhn ei khane amra kono element baniye render korbo na , ei component e amra props akare ekta function pathabo seta bolbe ki render korbo

// a comparison between hoc and render props pattern

/*
hoc and render props 2 tar e main concept holo alada ekta common component thakbe jeta state+ method gula pass kore dibe component gulai 
ready korqa function with state just call dilei functional hobe
*/
