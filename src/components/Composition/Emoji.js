import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addEmoji(text, emoji) {
        return `${emoji} ${text} ${emoji}`;
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addemoji: this.addEmoji });
    }
}
