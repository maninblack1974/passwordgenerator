// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// prompt user for password length must be 8 to 128 characters only
// prompt user to include lowercase
// prompt user to include uppercase
// prompt user to include numeric
// prompt user to include special characters
// validate user has at least one selected

function generatePassword() {
  var pswdLength = prompt("Enter length of desired password from 8 to 128 characters:");
  while (pswdLength > 7 && pswdLength < 129) {
    pswdLength = prompt("Enter length of desired password from 8 to 128 characters:");
  }

  return(pswdLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
