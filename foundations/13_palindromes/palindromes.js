const palindromes = function (string) {
  let cleaned = "";
  for (let char of string) {
    if (/^[a-zA-Z0-9]+$/.test(char)) {
      cleaned += char;
    }
  }
  cleaned = cleaned.toLowerCase();
  const reversedStr = cleaned.split("").reverse("").join("");
  console.log(reversedStr + " " + string);
  return reversedStr === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
