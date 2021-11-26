// eslint-disable-next-line react/function-component-definition
export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: '#000000',
                  color: '#ffffff',
              }
            : null;
    console.log('HoverCounter Render');
    return (
        <div>
            <h1 style={style} onMouseOver={incrementCount}>
                Hover {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
