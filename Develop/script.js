// Starting from Scratch 

// Assignment Code
var generateBtn = document.querySelector("#generate");
//This function allows you to generate a random password based on the users choices and password length
function generatePassword()
{
  //variables needed to generate a password
  validNumbers = "0123456789";
  validLowerCase = "abcdefghijklmnopqrstuvwxyz";
  validUpperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  validSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
// var userLength = prompt("Please enter a password length. (between 8 and 128)");

// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "_", "+", "~", "|", "?","-", "=", "?"];
// var userPassword = [];

// var upper = confirm("would you like to use upper case letters?")
// var lower = confirm("would you like to use lower case letters?")
// var number = confirm("would you like to use numbers?")
// var specials = confirm("would you like to use special characters?")

// var userChoices = [];

// if (upper && lower && number && specials === true) {
//   userChoices = userChoices.concat(upperCase + lowerCase + numbers + specialCharacters);
//   console.log(userChoices)
// }else if 
//   (upper && lower && number === true) {
//     userChoices = userChoices.concat(upperCase + lowerCase + numbers + specialCharacters)

//   }else if
//   (upper && lower === true)
  

// console.log(userChoices);


//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// // var password ="";
// // for (i = 0; i , user Length; i++){
// //   userPassword = 




// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



/*var newPass = "";
for ( i = 0; i < 8; i++ ){
  newPass += charset.charAt(Math.floor(Math.random() * charset.length))
}

console.log(newPass);*/

/* An idea of how to simply the code above

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

  function randomFunc() {
  return Math.floor(Math.random() * 8);
}
// Generator functions - 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*=<>/";
  return symbols[Math.floor(Math.random() * symbols.length)] 

}
*/
