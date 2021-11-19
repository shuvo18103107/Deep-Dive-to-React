import React from 'react';

class Buttton extends React.Component {
    shouldComponentUpdate(nextprops) {
        // so next props e amra change props ta pabo abr amader this.props eow change ace, so 2 ta check korbo , kono change na paile render korbo na false return korbo
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextprops;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false; // change hoi nai tai r render korbo na 2nd time tai false
        }
        return true;
    }

    render() {
        console.log('button component render');
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click Here
            </button>
        );
    }
}
export default Buttton;
