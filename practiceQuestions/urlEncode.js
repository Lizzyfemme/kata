// Create a function that takes a string of words and turn it into a percent-encoded string by replacing all whitespace with %20

const urlEncode = function(input) {
  let text = input.trim();
  let whiteSpace = " ";
  let newString = "";
  let encoded = "%20";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === whiteSpace) {
      newString += encoded;
    } else {
      newString += text[i];
    }
  }
  return newString;
};

module.exports = urlEncode;
