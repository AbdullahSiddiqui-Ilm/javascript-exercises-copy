const convertToCelsius = function (tempFah) {
  const C = (tempFah - 32) / 1.8;
  const res = +C.toFixed(1);
  return res;
};

const convertToFahrenheit = function (tempCel) {
  const F = tempCel * 1.8 + 32;
  const res = +F.toFixed(1);
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
