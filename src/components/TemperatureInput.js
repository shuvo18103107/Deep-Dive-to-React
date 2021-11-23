import React from 'react';

const temperatureUnit = {
    c: 'Celsius',
    f: 'FarenHeight',
};
const TemperatureInput = function ({ scale, temperature, omtempChange }) {
    return (
        <fieldset>
            <legend> Enter Temperature in {temperatureUnit[scale]}</legend>
            <input type="text" value={temperature} onChange={(e) => omtempChange(e, scale)} />
        </fieldset>
    );
};
export default TemperatureInput;
// event handler e kokhono function call kora jabe na func ref pathano jai r jodi poarmeter pass kora lage tahole func call kore arrow function use korbo taile seta w8 korbe event er jonno seta return kore kicu direct call kore na
