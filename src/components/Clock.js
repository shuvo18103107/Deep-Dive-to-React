import React from 'react';

// eslint-disable-next-line
class Clock extends React.Component { 
    // constructor(props) {
    //     // cg amra jani base class er constructor ta call kori super diye
    //     super(props); // parent class er constructor o call kore nite hobe
    //     // ekhn amra state property ta use korbo component class theke mainly initialize korbo
    //     this.state = { date: new Date() }; // er modee ekhn ami joto ichaa data rakhbo property nam diye ba method ja ichaa
    // }
    // props ke kaje lagiye jodi kono state ke initialize kora hoi ba kaje lage tokhn e constructor use kore kaj korbo noile amra jodi props use na hoi state e taile constructor bad diye direct state ta likhe dibo
    state = { date: new Date() }; // props use kori nai tai shortcut e likhlam

    // state er vitor kono property jokhn kono particular way te change korbo tokhn render ta abar call hobe o updated state ta kaj korbe
    // ekhn ekta function use kore ei state ta change korte hobe jeta component class setstate nam e diye dice
    // dom e asar por amader elemnt ta erpr amra stat change korbo kicuta jquery te document.ready er moto jeta react e componentDidMount(). eta react er ekta life cycle hook
    componentDidMount() {
        // eta run kore jokhn component dom e first time render hoi
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        // jokhn component ta dome thakbe na/chole jaowar somoi eta call kore tokhn to oi component er state taow off kora drkr seta ei function theke kori
        clearInterval(this.clockTimer);
    }

    // render 1st time call korbe erpor virtual dom theke dome amra dekhbo element ta seta erpr componentdidmount e jabe sekhane amra setstate change kore amra state ta change korte parbo tokhn abar render call korbe
    tick() {
        this.setState({
            date: new Date(),
        }); // er vitor ekta updated obj dite hobe
    }

    render() {
        const { locale } = this.props;
        const { date } = this.state;
        return (
            <h1 className="text">
                <span className="text"> {date.toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}

export default Clock;
/*
component er stat mane data change , props stat na cg eta bire theke data dicii just 
props tai bire theke mane parent theke ekta component e data pass kori kintu stat holo ekta component er vitorer data change capbility
render jmn react.component er ekta method sevabe react.component er state o ekta property 
state er vitor hold korbe eta component er ekta dabase hisave chinta kora jai
class e amra jani kicu initialize korte hole constructor use korte hoi r ekhane amra by defaulr props ta paramter hisave pabo 
*****Some state Guideline*****
1. setstate na call korle render hobe na state , tai sestate modify kora jabe na state diye like this.state.date = new Date();//wrong 
2.state update may be asynchronus mane ekta component e onkgula setstate call hocee tahole react setstae guloke eksathe batch kore update kore tokhn dekha jai jinista async way te kaj korce apni je time e setstate expect korcen naow hote pare
tokhn amra this.setstate e obj pass na kore function dibo this.setstate(state,props)=>
onk somoi amra setstate e ager state ta niye kaj kori kintu dekha gelo ager state er age r ekta state execute hoye gelo tokhn somosaa kintu function use korle state argument e amra thick exact ager state tai pabo
summary holo sestate e ager state niye kaj korte chaile function ba arrow function use korbo noile just as usual object 
3. states updates are merged 
mane setstate e amra state er vitor je property declare kori erpr setstate e jokhn jei property ta change hobe just oitai use korbo tokhn 2  state er property r setstate e same sei property er change ta compare hoye merge hobe means update korbe , state e multiple property thakbe amra jokhn jeta drkr ssetstate e seta use korbo
state er vitor ref type kicu property thakle like array ,object,function etc egula immutably ei state gula change korte hobe, mane setstate er age state er property jegula re4f type eiguyla change korle render abar call kore 
tai always state er vitor ref gular ekta shallow copy niye erpr jodi change kora lage setstate er age tokhn korbo
4. The data flows down 
react one way te data flow kore ,angular ba others framework 2 way te kore
ekta component tar state er data child component gulake dite pare kintu child component gula janbei na je tar props er ei datar source kotha theke aslo
one way te amra data flow korte pari parent component er state er data child component easily props hisave use korte pare 

*/
