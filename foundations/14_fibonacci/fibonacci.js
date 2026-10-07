const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  if (n == 1 || n == 2) {
    return 1;
  }

  let a = 1;
  let b = 1;
  let next = 0;
  for (let i = 1; i <= n - 2; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
