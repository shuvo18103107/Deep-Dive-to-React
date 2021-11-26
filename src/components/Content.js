import { useContext } from 'react';
import percel from '../lib/Context';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
// eslint-disable-next-line react/function-component-definition
export default function Content() {
    const { theme, switchTheme } = useContext(percel);
    console.log('Content Render');
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCounter) => (
                    <HoverCounter
                        theme={theme}
                        incrementCount={incrementCounter}
                        count={counter}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
/*
class Content extends React.Component {
    componentDidMount() {
        const { theme } = this.context;
        console.log(theme);
        // eikhane amra obj ta peye jabo provider er set kora
        // 2 ta way te taile amra provider er deowa value acess korte pari 1. contextname.consumer use kore render props style e r ekta holo je class tai amra use korte chai sei classs er contextType e , contextapi obj ta vore diye tokhn provider er patrhano value amra oi class er context property er vitor pabo
    }

    // eikhane jodi ekhn provider er pathano value acess korte chai tahole
    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>This is a Content</h1>
                <Counter>
                    {(counter, incrementCounter) => (
                        <HoverCounter
                            theme={theme}
                            incrementCount={incrementCounter}
                            count={counter}
                            switchTheme={switchTheme}
                        />
                        // <percel.Consumer>
                        //     {({ theme, switchTheme }) => (
                        //         <HoverCounter
                        //             theme={theme}
                        //             incrementCount={incrementCounter}
                        //             count={counter}
                        //             switchTheme={switchTheme}
                        //         />
                        //     )}
                        // </percel.Consumer>
                    )}
                </Counter>
            </div>
        );
    }
}
Content.contextType = percel;
// class er ekhn ekta property er modeee contextapi obj take rakhlam eta ekhn acess pabe this.conext akare
// ekhn ei class componen e jodi amra render er bire provider er value paite chai tahole classcomponentName.contextType = contextName
export default Content;

// ekhn class component  ejodi amra render er bire provider er pathano value acess korte chai tokhn ki korbo , amra to consumer diye value pachii render er vitore
/*
export default function Content() {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCounter) => (
                    <percel.Consumer>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                theme={theme}
                                incrementCount={incrementCounter}
                                count={counter}
                                switchTheme={switchTheme}
                            />
                        )}
                    </percel.Consumer>
                )}
            </Counter>
        </div>
    );
}

*/
