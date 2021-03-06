// Arrays that hold different characters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitalAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-'];

// Random int generator to use for password randomness
var randomInt = function (max) {
  var randomInt = Math.floor(Math.random() * max);

  return randomInt;
};

var passwordLengthSetter = function () {
  passwordLength = prompt("Welcome to Hogan's Password Generator! How many characters would you like your password to be? You must choose a number from 8 to 128");
  passwordLength = parseInt(passwordLength);
  // validation
  while (passwordLength === "" || passwordLength === null || !passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number from 8 to 128");
    passwordLengthSetter();
  }

  // return length of password
  return passwordLength;
};


//Password Generator
var generatePassword = function () {

  // User interaction questions
  passwordLength = passwordLengthSetter();

  confirmLowercase = confirm("Would you like to include lowercase letters?");

  confirmUppercase = confirm("Would you like to include uppercase letters?");

  confirmNumeric = confirm("Would you like to include numbers?");

  confirmSpecial = confirm("Would you like to include special characters?");

  console.log(passwordLength, confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);

  // Handle someone rejecting all confirms
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    alert("You must choose at least one type of character. Please try again.");
    return generatePassword();
  }

  // Declare and initialize password variables
  var password = "";

  // declare and initialize placeholder array
  var placeHolderArray = [];

  /* lots of if and for statements here
     First, confirm that the user wants to use that type of character
     Then, concatenate onto password
     Finally, append entire array's contents into placeholder array for later use */
  if (confirmLowercase) {
    password += alphabet[randomInt(alphabet.length)];
    for (var i = 0; i < alphabet.length; i++) {
      placeHolderArray.push(alphabet[i]);
    }
  }
  if (confirmUppercase) {
    password += capitalAlphabet[randomInt(capitalAlphabet.length)];
    for (var i = 0; i < capitalAlphabet.length; i++) {
      placeHolderArray.push(capitalAlphabet[i]);
    }
  }
  if (confirmNumeric) {
    password += numerals[randomInt(numerals.length)];
    for (var i = 0; i < numerals.length; i++) {
      placeHolderArray.push(numerals[i]);
    }
  }
  if (confirmSpecial) {
    password += specialCharacters[randomInt(specialCharacters.length)];
    for (var i = 0; i < specialCharacters.length; i++) {
      placeHolderArray.push(specialCharacters[i]);
    }
  }

  // Add from placeHolderArray until length criteria is met
  for (var i = password.length; i < passwordLength; i++) {
    password += placeHolderArray[randomInt(placeHolderArray.length)];
  }

  console.log(randomInt(1), randomInt(5), randomInt(10), randomInt(1000));
  console.log(password.length);
  console.log(placeHolderArray);

  return password;

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