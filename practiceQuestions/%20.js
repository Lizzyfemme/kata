const urlEncode = function(input) {
  let text = input.trim();
  let whiteSpace = " ";
  let newString = "";
  let encoded = "20%";
 
  for (let i = 0; i < text.length; i++) {
    if (text[i] === whiteSpace) {
      newString += encoded;
    }
    else {
      newString += text[i];
    }
  }
  return newString;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));