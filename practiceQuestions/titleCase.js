//Create a function called titleCase that takes a string and capitalizes the first letter of every word.

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
module.exports = titleCase;
