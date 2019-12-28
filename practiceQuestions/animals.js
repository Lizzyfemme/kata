const nonRandomAnimal = (animals) => {
  var animalEntry;
  animalEntry = animals[1];
  return animalEntry;
};

console.log(nonRandomAnimal([
  {animal: "Elephant", color: "Blue"},
  {animal: "Monkey", color: "Purple"},
  {animal: "Rabbit", color: "Yellow"}
]));