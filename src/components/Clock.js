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
        this.setState({ locale });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;

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
