//Set vars
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password fields
function generatePassword() {
    var passParams = passwordParameters();
    var passString = "";
    var pChar ="";

    for (var i = 0; i < passParams[0]; i++) {         
      if ( passParams.length > 2) {                   
          var typeIndex = (Math.floor((Math.random() * (passParams.length - 1))) + 1);    
      } else {
          var typeIndex = 1;
      }
                 
      if (passParams[typeIndex] == "upper") {
          pAlpha = genAlpha();
          pChar = pAlpha.toUpperCase();
      } else {
        if (passParams[typeIndex] == "lower") {
            pChar = genAlpha();
        } else {
          if (passParams[typeIndex] == "numeric") {
              pChar = genNumeric();
          } else {
              pChar = genSpecial();
          }
        }
      }
      passString += pChar;
    }
  return (passString);             
}

// Collect user data as to how many characters and what type of characters they wish to use to create passwords
// After all is selected print out the passwords tpo the the password field
function passwordParameters() {
  var charType = 0;                             
  var upper, lower, numeric, special = false;   
  var pswdLength = 0;                            
  var passParams = [];                         
  
  while (!((pswdLength > 7) && (pswdLength < 129))) {
    pswdLength = prompt("Enter length of desired password from 8 to 128 characters: ");

  }

  passParams.push(pswdLength);                 


  while (charType == 0) {
    if (charType == 0) {
      alert("Please confirm at least one character type.");
    }
    
    upper = confirm("Would you like to include upper case letters?");     
    lower = confirm("Would you like to include lower case letters?");     
    numeric = confirm("Would you like to include numeric characters?");   
    special = confirm("Would you like to include special characters");    
    
    if (upper || lower || numeric || special) {                           
      charType++;
    }
  }

  if (upper) {
    passParams.push("upper");                   
  }
  if (lower) {
    passParams.push("lower");                   
  }
  if (numeric) {
    passParams.push("numeric");                 
  }
  if (special) {
    passParams.push("special");                 
  }

  return passParams;
}


// Generate Alpha Characters
function genAlpha() {
  var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var aChar = alphaArray[Math.floor((Math.random() * alphaArray.length))];
  return aChar;
}

// Generate Numeric Characters
function genNumeric() {
  var nChar = Math.floor((Math.random() * 10));
  return nChar;
}

// Generate Special Characters
function genSpecial() {
  var specialChar = ["!", "@", "#", "$", "%", "^", "\&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", "\\", ":", "\"", ";", "\'", "<", ">", ",", ".", "?", "/", "~", "\`"]
  var sChar = specialChar[Math.floor((Math.random() * specialChar.length))];
  return sChar;
}
