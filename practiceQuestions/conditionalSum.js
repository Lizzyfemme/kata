// Create a function named conditionalSum that will be given an array of numbers and a condition,  odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

const conditionalSum = function(values, condition) {
  let result = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      result += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      result += values[i];
    }
  }
  return result;
};

module.exports = conditionalSum;
