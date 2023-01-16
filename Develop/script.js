// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

 let uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
 let lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 let symbolArr = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

 let result = [];
 let user = [];

 let charLength = parseInt(prompt("How many characters will be included in passwords? Must be between 8 and 128 characters."));
 // For charLength
 if (!charLength) {
  alert("Please enter a value.");
  console.log("A value was not entered.");                                                                      
}
  else if (charLength < 8 || charLength > 128) {
  charLength = parseInt(prompt("Please choose between 8 and 128 characters."));
}

 let uppercase = confirm("Click OK to include uppercase letters in the password.");
 let lowercase = confirm("Click OK to include lowercase letters in the password.");
 let number = confirm("Click OK to include numbers in the password.");
 let symbol = confirm("Click OK to include symbols letters in the password.");

  if (!uppercase && !lowercase && !number && !symbol) {
    alert("Please include at least one criteria.");
    console.log("All criteria were denied by user.");
  }
  
  if (uppercase) {
    result = result.concat(uppercaseArr);
  }

  if (lowercase) {
    result = result.concat(lowercaseArr);
  }

  if (number) {
    result = result.concat(numberArr);
  }

  if (symbol) {
    result = result.concat(symbolArr);
  }
  console.log(result);

  for (let i = 0; i < charLength; i++) {
    user.push (result[Math.floor(Math.random() * result.length)]);
  }

    return user.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
