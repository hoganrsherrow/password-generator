// Arrays that hold different characters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-'];

//Password Generator

var generatePassword = function() {

// User interaction questions
passwordLength = prompt("Welcome to Hogan's Password Generator. How many characters would you like your password to be?");

confirmLowercase = confirm("Would you like to include lowercase letters?");

confirmUppercase = confirm("Would you like to include uppercase letters?");

confirmNumeric = confirm("Would you like to include numbers?");

confirmSpecial = confirm("Would you like to include special characters?");

console.log(passwordLength, confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);





return "This is where the password will go"

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
