// Fahrenheit converted into Celsius
function getFahrenheit(fahrenheit) {
    const convertedFahrenheit = (fahrenheit - 32) * 5 / 9;
    return convertedFahrenheit;
};
const fahrenheitInput = 2;
const celsiusOutput = getFahrenheit(fahrenheitInput);
console.log(celsiusOutput, 'Degree Fahrenheit Converted into', fahrenheitInput, 'Degree Celsius.');














