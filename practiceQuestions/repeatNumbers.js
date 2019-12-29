// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

let repeatNumbers = function(data) {
  let string = "";
  for (let row = 0; row < data.length; row++) {
    for (let col = 1; col <= data[row][1]; col++) {
      string += data[row][0];
    }
    if (row < data.length - 1) {
      string += ", ";
    }
  }
  return string;
};
module.exports = repeatNumbers;
