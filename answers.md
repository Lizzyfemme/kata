## addNumbers

const sumLargestNumbers = function(data) {
let total = 0;
for (var i = 0; i < data.length; i++) {
total += Number(data[i]);
}
return total;

## camelCase

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

## conditionalSum

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

## instructorWithLongestName

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
} return object;
}

## numberOfVowels

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

## repeatNumbers

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

## titleCase

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

## urlEncode

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
