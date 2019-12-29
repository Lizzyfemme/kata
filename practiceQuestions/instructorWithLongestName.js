// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

const instructorWithLongestName = function(instructors) {
  let longest = "";
  let index;
  let object;
  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name;
    if (longest.length < nameLength.length) {
      longest = nameLength;
      index = longest.indexOf(longest[i]);
      object = instructors[index];
    }
  }
  return object;
};

module.exports = instructorWithLongestName;
