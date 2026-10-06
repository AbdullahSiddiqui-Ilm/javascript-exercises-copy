const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  return numArray.reduce(
    (accumalator, currentVal) => accumalator + currentVal,
    0,
  );
};

const multiply = function (numArray) {
  return numArray.reduce((accumalator, currentVal) => {
    accumalator *= currentVal;
    return accumalator;
  });
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
