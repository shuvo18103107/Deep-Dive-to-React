import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addEmoji(text, emoji) {
        return `${emoji} ${text} ${emoji}`;
    }

    render(options) {
        const text = 'I am from Emoji components';
        if (options) {
            return <div>{options}</div>;
        }

        return <div>{text}</div>;
    }
}
