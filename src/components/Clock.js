import React from 'react';
import Button from './Button';

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
        const { date, locale } = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button type="button" change={this.handleClick} locale="en-Us">
        //             Click Here
        //         </Button>
        //     );
        // } else {
        //     button = (
        //         <Button type="button" change={this.handleClick} locale="bn-BD">
        //             Click Here
        //         </Button>
        //     );
        // }

        return (
            <div>
                <h1 className="text">
                    <span className="text"> {date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button
                        type="button"
                        change={this.handleClick}
                        locale="en-Us"
                        show={false}
                        enable={false}
                    />
                ) : (
                    <Button type="button" change={this.handleClick} locale="bn-BD" show enable />
                )}
            </div>
        );
    }
}

export default Clock;
/* ***** Conditional Rendering + list & keys******* 
component er vitor kono jsx element jodi condition based e change hoi tahole sei js eleemnt take js variable er moto chinta kore render er bire condition apply kore erpr render e use korte pari
onkgula way te conditional rendering korate pari 
1. render function er vitor jsx return er age amra if else diye state er value use kore condionally jsx eleemnt dekhate pari se khetre jsx element gula variable er moto chinta korte hobe
2. render e jsx return er vitor singl curlibrace e amra ternari operator use kore conditionally kaj korate pari 
3. truthy or falsy way - omponent theke ek component er ki ki show korbo ta truthy falsy props akare kaj korate pari 
4. amra kono component dekhabo ki dekhabo na seta oi component jsx return korar age decisde korte hobe tobe react er component theke kicu ekta return expect kore jodi jsx eleemnt na dekhate chai atleast null return korte hobe, null return korleow oi component er baki lifecyckle hook gula use kore like componentdidmount,unmound ,shouldomponentUpdate egula

*** */
