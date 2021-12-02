// eslint-disable-next-line react/function-component-definition
export default function ButtonComponent({ className, toogle, theme }) {
    return (
        <div>
            <button type="button" onClick={toogle} className={className} />
            <h1 style={{ textAlign: 'center' }}>{theme} Mode is On </h1>
        </div>
    );
}
