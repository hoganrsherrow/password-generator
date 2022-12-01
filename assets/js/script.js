// Arrays that hold different characters
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-'];

// Random int generator to use for password randomness
const randomInt = max => {
  var randomInt = Math.floor(Math.random() * max);

  return randomInt;
};

// Shuffle function for password string
shuffle = (str) => {
  let a = str.toString().split('');
  for(let i = str.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = str[i];
    str[i] = a[j];
    str[j] = temp;
  }

  return a.join('');
}
// const shuffle = (arr) => {
//   let i = arr.length, randomIndex;

//   while(i != 0) {
//     randomIndex = Math.floor(Math.random() * i--);

//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//   }
// }

const passwordLengthSetter = () => {
  passwordLength = $("#password-length").val();
  
  return passwordLength;
};

// Check whether boxes are checked
const checkboxValidation = elementID => {
  return $(`#${elementID}`).is(':checked');
}

//Password Generator
const generatePassword = () => {

  // Get user inputs
  passwordLength = passwordLengthSetter();


  // Declare and initialize password variables
  let password = "";

  // declare and initialize placeholder array
  let placeHolderArray = [];

  // Validation
  if (checkboxValidation("lowercase-characters")) {
    password += alphabet[randomInt(alphabet.length)];
    for (var i = 0; i < alphabet.length; i++) {
      placeHolderArray.push(alphabet[i]);
    }
  }
  if (checkboxValidation("uppercase-characters")) {
    password += capitalAlphabet[randomInt(capitalAlphabet.length)];
    for (var i = 0; i < capitalAlphabet.length; i++) {
      placeHolderArray.push(capitalAlphabet[i]);
    }
  }
  if (checkboxValidation("number-characters")) {
    password += numerals[randomInt(numerals.length)];
    for (var i = 0; i < numerals.length; i++) {
      placeHolderArray.push(numerals[i]);
    }
  }
  if (checkboxValidation("special-characters")) {
    password += specialCharacters[randomInt(specialCharacters.length)];
    for (var i = 0; i < specialCharacters.length; i++) {
      placeHolderArray.push(specialCharacters[i]);
    }
  }

  // Add from placeHolderArray until length criteria is met
  while(password.length < passwordLengthSetter()) {
    password += placeHolderArray[randomInt(placeHolderArray.length)];
  }

  console.log(password);
  // Shuffle string
  let answer = shuffle(password);
  console.log(password);

  return answer;

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