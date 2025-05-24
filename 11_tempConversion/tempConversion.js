const convertToCelsius = function (temp) {
  return parseFloat(((temp - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (temp) {
  return parseFloat((temp * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
