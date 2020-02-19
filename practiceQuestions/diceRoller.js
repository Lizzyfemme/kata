// Create a function that take in 2 parameters, the maximum possible roll and the possible minimum roll.

const diceRoller = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
module.exports = diceRoller;
