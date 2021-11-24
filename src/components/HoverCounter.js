// eslint-disable-next-line react/function-component-definition
export default function HoverCounter({ count, incrementCount, theme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: '#000000',
                  color: '#ffffff',
              }
            : null;
    return (
        <h1 style={style} onMouseOver={incrementCount}>
            Hover {count} times
        </h1>
    );
}
