import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
// eslint - disable - next - line;

const App = function () {
    return (
        <div className="app">
            {/* <User render={(isLoggedIn) => (isLoggedIn ? 'shuvo' : 'guest')} /> */}
            <Counter
                render={(counter, incrementCounter) => (
                    <ClickCounter count={counter} incrementCount={incrementCounter} />
                )}
            />
            <Counter
                render={(counter, incrementCounter) => (
                    <HoverCounter count={counter} incrementCount={incrementCounter} />
                )}
            />
        </div>
    );
};

export default App;
// ekhane prop akare function pathacii so  component just ei function ta call korbe se kicu notun kore render kore na , etai render props
// render props ekta simpley function jeta kono component er prop e function akare dei , r component ta ki render korbe seta ei function logic ei bola thake
// render props emn ekta prop jeta component e render logic define kore
// so common functionality er jonno ekta component banabo sei component e props akare render logic create korbo
// common function ta just state dibe amai seta ami bibinoo component e pass korbo taile baki component gula just presentational component hisave thaklo
// amra chaile common functionality component tai render props akare na pathiye er vitor children akare function ta likhte pari , jeta pore props.children diye dore erpr function ta call korate pari
