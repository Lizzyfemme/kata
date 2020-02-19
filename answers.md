## addNumbers

```js
const sumLargestNumbers = function(data) {
let total = 0;
for (var i = 0; i < data.length; i++) {
total += Number(data[i]);
}
return total;
```

## camelCase

```js
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
```

## conditionalSum

```js
const conditionalSum = function(values, condition) {
  let sum = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      sum += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      sum += values[i];
    }
  }
  return sum;
};
```

## diceRoller

```js
const diceRoller = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
```

## instructorWithLongestName

```js
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
```

## lunch

```js
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
```

## numberOfVowels

```js
const numberOfVowels = function(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data.charAt(i) === "a" ||
      data.charAt(i) === "e" ||
      data.charAt(i) === "i" ||
      data.charAt(i) === "o" ||
      data.charAt(i) === "u"
    ) {
      sum++;
    }
  }
  return sum;
};
```

## palindrome

```js
const palindrome = function(str) {
  const noSpaces = str
    .toLowerCase()
    .split(" ")
    .join("");
  const midIndex = Math.floor(noSpaces.length / 2) - 1;
  const lastIndex = noSpaces.length - 1;

  if (noSpaces.length === 1) {
    return true;
  } else {
    for (let i = 0; i <= midIndex; i++) {
      if (noSpaces[i] != noSpaces[lastIndex - i]) {
        return false;
      }
    }
    return true;
  }
};
```

## pigLatinTranslator

```js
const VOWELS = ["a", "e", "i", "o", "u"];

function pigLatinTranslator(message) {
  return message
    .split(" ")
    .map(translateWord)
    .join(" ");
}

function translateWord(word) {
  for (var i = 0; i < word.length; i++) {
    if (VOWELS.indexOf(word[i]) !== -1) break;
    if (word.slice(i, i + 2) === "qu") i += 1;
  }
  return word.slice(i) + word.slice(0, i) + "ay";
}
```

## repeatNumbers

```js
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
```

## titleCase

```js
function titleCase(str) {
  if (str === "") {
    return "";
  } else {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  }
}
```

## urlEncode

```js
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
```
