## addNumbers

const sumLargestNumbers = function(data) {
let total = 0;
for (var i = 0; i < data.length; i++) {
total += Number(data[i]);
}
return total;

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
