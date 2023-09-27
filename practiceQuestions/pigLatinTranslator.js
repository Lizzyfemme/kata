// Create a function that follows these rules:
// the consonant of a word before the first vowel should appear at the end of the word and "ay" should be added to the end of the word.
// If the word starts with "qu", "qu" should be moved to the back of the word and "ay should be added".
// If a word begins with a vowel, only "ay" should be added to the end of the word.

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


