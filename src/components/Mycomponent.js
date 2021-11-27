import { useEffect, useState } from 'react';

// eslint-disable-next-line react/function-component-definition
export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        console.log('updating document title');
        document.title = `clicked ${count} times`;

        // setDate(new Date()); // prb holo count change hole date o change hobe 2 ta state eksathe efect hole prb tai alada useeffect use korbo
    }, [count]); // ekhane array ta holo dependency array mane kon jinistar upor se dependent
    // useEffect(() => {
    //     console.log('date change');
    //     setDate(new Date());
    // }, [date]);
    // 1st time render holei + joto render e hok state change hole pura componenet e eta call hobe r 1sec porpor sestate korci tai loop akare call hote thakbe kintu amra chai eta just first time call koruk erpr as usua 1 sec por por state change hote thak er jonno [] use korbo er mane kono dependency nai componentdidmount er moto kaj korbe

    useEffect(() => {
        console.log('clock tick');

        const interval = setInterval(tick, 1000);
        console.log(interval);
        // do the cleanup - stop the timer
        // ekhane ei function tai clean up er kaj korbe , use effect er first parameter function theke kono function return korle seta componentwillunmount er moto kaj kore
        return () => {
            console.log('component will unmount');
            clearInterval(interval);
        };
    }, []); // blank array mane first time call hobe render howar 9rime e just
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                {/* <br />
                <br /> */}
                {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> */}
                {/* <br />
                <br /> */}
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
// useeffect func er 2 ta parameter , ekta func jeta every render e call hoi er vitor ja thake , 2nd parameter bole sudu matro kon jinis ta change hole tumi rerender korba mane proti state change e rerender korar age se vabbe
// useEffect func parameter hisave nei r ekta function sei func er kaj holo jokhn e amar ei component ta render hobe tokhn e er vitor ja thakbe run korbe ,mane eta every render e run korbe seta update hok , add hok sob, mane 3 ta lifecycle ei eta run korbe
// amra jani je useEffect protibar call hoi render hole , ekhn er vitore je function call hoi sei func body te ja thakbe setai call hobe prottek render e , ekhn amra state change korlam onno ekta element er but useeffect call korlo and barbar render korlo emn ekta jinis jeta oi state change er sathe relatable na, class e eta componentdidupdate diye solve kortam prevstate +prevprops check kore kaj koraitam
