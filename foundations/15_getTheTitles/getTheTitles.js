const getTheTitles = function (array) {
  key = "title";
  const titles = array.map((book) => book[key]);
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
