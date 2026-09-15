const sumAll = function (num1, num2) {
  let res = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        res += i;
      }
    } else if (num1 > num2) {
      for (let i = num2; i <= num1; i++) {
        res += i;
      }
    }
  } else {
    return "ERROR";
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
