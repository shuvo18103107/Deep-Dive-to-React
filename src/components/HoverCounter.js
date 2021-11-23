import withCounter from './HOC/withCounter';

const HoverCounter = function ({ value, handler }) {
    return <h1 onMouseOver={handler}>Hover {value} times</h1>;
};

export default withCounter(HoverCounter);
