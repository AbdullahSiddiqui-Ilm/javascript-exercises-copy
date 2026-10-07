const findTheOldest = function (array) {
  const oldestPerson = array.reduce((oldestObject, current) => {
    let currentAge = current["yearOfDeath"] - current["yearOfBirth"];
    if (current["yearOfDeath"] === undefined) {
      currentAge = 2026 - current["yearOfBirth"];
    }

    oldestAge = oldestObject["yearOfDeath"] - oldestObject["yearOfBirth"];

    if (oldestObject["yearOfDeath"] === undefined) {
      oldestAge = 2026 - oldestObject["yearOfBirth"];
    }

    if (currentAge > oldestAge) {
      oldestObject = current;
      return oldestObject;
    } else {
      return oldestObject;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
