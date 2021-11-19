import React from 'react';

class Button extends React.Component {
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
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Click Here' : 'ক্লিক করুন'}
                </button>
                {show && <p>Hello </p>}
            </>
        );
    }
}
export default Button;

// props theke falsy value pai tai component ta theke null return korlam
