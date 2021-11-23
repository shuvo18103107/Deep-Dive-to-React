// eslint-disable-next-line react/function-component-definition
export default function Text({ addEmoji, addBracket }) {
    let text = 'JS BOSS IN THE TOWN ';
    if (addEmoji) {
        text = addEmoji(text, '🛩️');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div> {text}</div>;
}
