import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// eslint - disable - next - line;
const App = function () {
    return (
        <div className="app">
            <ClickCounter />
            <br />
            <br />
            <HoverCounter />
        </div>
    );
};

export default App;
// code repeat na kore common functionality component er modee share korar ekta need ace etai higher order component
// higher order component is a function that takes a component as a parameter and return a new component
// common functionality onk gula component er hoile amra hoc function use kori
