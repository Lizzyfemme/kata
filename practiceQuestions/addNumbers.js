// In this exercise, we will be given an array of 2 or more numbers. Find the sum of all the numbers.

const addNumbers = function(data) {
  let result = 0;
  for (let number of data) {
    result += number;
  }
  return result;
};
module.exports = addNumbers;
