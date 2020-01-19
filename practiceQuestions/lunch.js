/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves:
 *
 * "Keep coding"
 *
 * 20 or less
 * "Pick something up and eat at the Lab or in the kitchen, where you can get to know your fellow classmates."
 * 30 minutes or less
 * "You deserve a break. Try a place in Gastown."
 *
 * more than 30
 *"This is a bootcamp, you should probably reconsider."

 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const lunch = function(hungry, availableTime) {
  if (hungry === true && availableTime < 20) {
    return "Pick something up and eat at the Lab or in the kitchen, where you can get to know your fellow classmates.";
  } else if (hungry === true && availableTime <= 30) {
    return "You deserve a break. Try a place in Gastown.";
  } else if (hungry === true && availableTime > 30) {
    return "This is a bootcamp, you should probably reconsider.";
  } else {
    return "Keep coding";
  }
};

module.exports = lunch;
