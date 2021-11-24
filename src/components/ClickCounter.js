import React from 'react';

// eslint-disable-next-line react/function-component-definition
export default function ClickCounter({ count, incrementCount }) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}
