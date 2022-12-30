const convertToCelsius = function(f) {
  celsius = (f - 32) * 5/9;
  rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(c) {
  fahrenheit = (c * 9/5) + 32;
  rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
