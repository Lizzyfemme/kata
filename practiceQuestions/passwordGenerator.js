// Create a function that follows these rules:
// If the word contains "a" it is replaced with a "4"
// If the word contains "e" it is replaced with a "3"
// If the word contains "i" it is replaced with a "!"
// If the word contains "o" it is replaced with a "0"

const passwordGenerator = function(password) {
  let newPassword = "";
  for (let x = 0; x < password.length; x++) {
    let letter = password.charAt(x);
    if (letter === "a") {
      newPassword += "4";
    } else if (letter === "e") {
      newPassword += "3";
    } else if (letter === "i") {
      newPassword += "!";
    } else if (letter === "o") {
      newPassword === "0";
    } else newPassword += letter;
  }
  return newPassword;
};
module.exports = passwordGenerator;
