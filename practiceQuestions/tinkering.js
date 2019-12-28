const instructorWithLongestName = (instructors) => {
  let longestName=[];
  for (let i = 0; i < instructors.length; i ++) {
    let nameLength = instructors[i].name
    if (longestName.length < nameLength.length) {
      longestName = instructors;
    }
  }
  return longestName;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));