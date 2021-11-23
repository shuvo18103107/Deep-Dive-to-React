import React from 'react';
import { Convert, toCelsius, toFarenHeight } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TempCalculator from './TemperatureInput';

export default class Calculator extends React.Component {
    state = { temperature: ' ', scale: ' ' };

    onTemperatureChange = (e, scale) => {
        this.setState({ temperature: e.target.value, scale });
    };

    render() {
        const { temperature, scale } = this.state;
        // temp state ta same e jodi thake tahole event change korle 2 tai eksathe render hobe tai amader 2 ta input er scale er upor based kore modify korte hobe temp state
        const celsius = scale === 'f' ? Convert(temperature, toCelsius) : temperature;
        const farenHeight = scale === 'c' ? Convert(temperature, toFarenHeight) : temperature;

        return (
            <div>
                <TempCalculator
                    scale="c"
                    temperature={celsius}
                    omtempChange={this.onTemperatureChange}
                />

                <br />
                <br />
                <TempCalculator
                    scale="f"
                    temperature={farenHeight}
                    omtempChange={this.onTemperatureChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

// stateful component use korbo
// same input filld e ek e state er modee name property diye alada kore state er value func call kore modify korte pari
