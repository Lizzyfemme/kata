// Converting a normal string into camelCase text.

const camelCase = function(input) {
  let output = "";
  for (x = 0; x <= input.length; x++) {
    if (input.charAt(x) === " ") {
      output += input.charAt(x + 1).toUpperCase();
      x++;
    } else {
      output += input.charAt(x);
    }
  }
  return output;
};

module.exports = camelCase;
