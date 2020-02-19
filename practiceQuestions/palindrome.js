// Create a function called palindrome, that outputs true if a string passed to it is a palindrome or false otherwise.

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

module.exports = palindrome;
