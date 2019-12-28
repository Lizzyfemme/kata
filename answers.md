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

## sumLargestNumbers

const sumLargestNumbers = function(data) {
let total = 0;
for (var i = 0; i < data.length; i++) {
total += Number(data[i]);
}
return total;
