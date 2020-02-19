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
module.exports = pigLatinTranslator;
