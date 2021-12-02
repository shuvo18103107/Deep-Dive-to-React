// eslint-disable-next-line react/function-component-definition
export default function Button({ link, text }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            {text}
        </a>
    );
}
