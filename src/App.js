import ClockList from './components/ClockList';
// eslint-disable-next-line
const App = function () {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantity={quantities} />
        </div>
    );
};

export default App;

/* list and key concept
amra ekta component multiple time copy paste kore na bosiaya ekta component kotobar chai seta r ekta component ke bole dile sekhane list er use kore kaj korabo
 */
