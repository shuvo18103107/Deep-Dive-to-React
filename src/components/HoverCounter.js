// eslint-disable-next-line react/function-component-definition
export default function HoverCounter({ count, incrementCount }) {
    return <h1 onMouseOver={incrementCount}>Hover {count} times</h1>;
}
