export const toCelsius = function (farenHeight) {
    return ((farenHeight - 32) * 5) / 9;
};
export const toFarenHeight = function (celsius) {
    return (celsius * 9) / 5 + 32;
};

export const Convert = function (temperature, ConvertTo) {
    const input = parseFloat(temperature);
    if (Number.isNaN(temperature)) {
        return '';
    }
    const output = ConvertTo(input);
    const rounded = Math.round(output * 100) / 1000;
    return rounded.toString();
};
