import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
// const Clock = function ({locale}) { 
//   // react components return react element
//   // components recieve properties from outside
//     return (
//         <h1 className="text">
//             <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//         </h1>
//     );
// };
// eslint-disable-next-line
class Clock extends React.Component {
    // by default ekhane object o create hoi + render method theke jeta parent component theke pai seta theke eleemnt return kore
    // bire theke props(attribure/function arguments) gula jokhn pathabo ei class e tokhn eta react.component er class er props e pabo
    // this.props ='' evabe modify korte gele react render abar call kore new vabe cg amra jani element er proiperty change kora jai na new vabe create kora jai
    render() {
        const { locale } = this.props;
        return (
            <h1 className="text">
                <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}
// ReactDOM.render(Clock(), document.getElementById('root'));
ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));
/* 1st benifit using component ->we can reuse it everywhere ,element er moto barbar banan lagbe na
2nd benifit -> component e amra parameter use korte pari ei parameter gula object hisave recieve hoi,joto parameter pass korbo toto object er property create hobe oi component e parameter hisave, jehutu obj pass korci tai obj destructing kore seta use korte parbo 
ei functional component charaow react e class use kore component create kora jai, functional component e ekhane kintu data change ta listen hocee na just reuse korci tai class component use korbo jate dynamic change ta listen hoi sathe react element o return kore
class component use kori jate amra statful component create kora jai, functional component e kintu stat change korar capability chilo na change  korte chaile bire theke data pass kora lagto
class component e nijei nijer ekta stat create korte parbe seta change o korte parbe, functional component react chinte pare class keow chinate chaile react er react.classcomponent use korte hbe
extends korar por amra likhte parbo <clock/> eivabe cg ekhn se first e same vabe dekhbe ei nam e kono function ace kina erpr dekhbe class component ace kina, paowar por ei class er vitore se nije nijei eklta obj banai and sei class er render namok method take call kore dei, so ekhn print() na render call korte hobe eta define kora ace react er component class er vitor  
so internal class er vitor sob kaj korbo r ultimately render er vitor ekta eleemnt return korbo
ekhn class component er vitor value pass korle react.component er props namok property er vitor eta bosai dei
*/
