import percel from '../lib/Context';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
// eslint-disable-next-line react/function-component-definition
export default function Content() {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCounter) => (
                    <percel.Consumer>
                        {(value) => (
                            <HoverCounter
                                theme={value}
                                incrementCount={incrementCounter}
                                count={counter}
                            />
                        )}
                    </percel.Consumer>
                )}
            </Counter>
        </div>
    );
}

// render props hisave consumer kaj kore sei ekhane children e annoymous function ta pai setake call kore with provider se set kora sei storeage value diye then ei children ta keiu return kore
