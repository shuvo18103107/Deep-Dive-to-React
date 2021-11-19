import React from 'react';
import Buttton from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        // eta jehutu ekta event listner tai by default event ta parameter e thake
        // e.preventDefault();
        // console.log('the butoon was clicked');
        this.setState({ locale });
        // ekhn ekta error dekhabe button e click korle bolbe handleclick e this.setstate e this ta undefined .
        // cg function e this undefined but arrow e function e this worked r ekta way holo bind use kora cg amra jani call apply bind e amra this specify korte kono function er bind er vitor example hisabe ekea obj pass kori functionName.bind(obj)
        // this.handleClick ei call back e this ta undefined hobe savavik
        // eta solve korar onk way ace handleclick etake ekta arrow function baniye etai best practice r ekta way this chinanor jonno bind kore dite hobe function take jeta constructor e korte hoi this.handleClick =this.handleClick.bind(this)
        // ekhn jodi callback function e parameter pass kora lagto tahole
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock component render');

        const { date, locale } = this.state;
        return (
            // react e kono component theke ekta element e return korbe
            <div>
                <h1 className="text">
                    <span className="text"> {date.toLocaleTimeString(locale)}</span>
                </h1>

                <Buttton type="button" change={this.handleClick} locale="en-Us">
                    Click Here
                </Buttton>
            </div>
        );
    }
}

export default Clock;
/*
 ***Handling Event and control re render***
event handling function dynamic vabe function ref korte hobe call kora jabe na noile component render hpwar time ei function call korbe ,just ref korte hobe
event handling function gulai react event ta parameter hisave pass kore dei 
callback function e this pabe na ekhn this chinano jai 3 upai e ,
1. constructor function e this ke chinai deowa jai like this.handkleclick = this.handleclick.bind(this)
2. arrow function cg arrow func e this niye jamela nai 
3. ekebare function call  e bind use kora jai jekhane parameter o pass kora jai like this.handleclick.bind(this,'hello')  
4. parameter pass korar r ekta short way ace je onclick ei arrow function diye dibo onclick ={()=>this.handleclick('en-Us')}, chaile parameter o pass kora jai
5. component use korle onno class theke tokhn amra props hisave pathate pari nijer class er kono property ba function , cg amra jani proti ta component er jsx element ekta object sekhane props e amra ja pathabo ta thake 
6. ekta component er vitor parent element er state update hoilo kintu nicher jsx element ta update holo na tokhn amra jehutu update hoi nai kintu state change hole react pura component er sob e render kore , so jetar state update hopcee na kintu parent eleemnt er karone render hocee tokhn amra eta manually off kore dite pari 
7.so component e je eleemnbt ta update hoi na state change hole seta off kora jai react er shouldcomponentupdate life cycle hook ace jeta nextprops and nextstep nei argument hisave , ekhn kono component re render howar age eta call hoi jekhane nextprops r nextstate e dekhe je eitai props r state e kono change ace kina, change thakle true return kori tar mane component ta update hobe r false hole update hobe na, mane kono component autoi render er age manual ekta control niye nichii  
8. ekhane component erporo re render hobe like button ta jodio amra shouldcomponentupdate diye check koreci prb holo amra jokhn props hisave bind use kore function ref dicii tokhn bind protibar e new ekta function ref kore sekhane this setup kore tai previous change r nextchgange mile na tai re render hoi return true kore, eta arrow func use korleow same hoito
9. to re render theke bachar way hoilo amra jokhn props hisave func ref pathabo tokhn amra parameter soho pathabo na mane props e arrow func ba bind kore je parameter o pathai eta korbo na class er vitor e arrow func use kore this er kaj chalabo 
10. key note : event handler gulai call back function arrow function diye lekha vlo jodi state change kori this  niye somosaa hoi na , r call back functtion e data pathaite chaile bind use kora jai , arrow function use kora jai but bind r arrow function new ekta function refer kore proti ta state change e , so component e state change e je element ta barbar re render hocee ek e jinis tar jonno shouldcomponentupdate use kora jai jekhane nextprops r current props er change vuje false true returm kora jai , er jonno bind ba arrow function call back e use kora vlo na , just function reference daow r data pass korte chaile props use koro 
*/
