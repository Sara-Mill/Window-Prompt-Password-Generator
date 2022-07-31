// Assignment code here


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


// Assignment code here
var numbers =(1,2,3,4,5,6,7,8,9);
var symbols =("!","@", "#","$","%","^","&","*","(",")");
var uppercase = "";
var lowercase = "a" ;
var length = "";
confirmLower = true;
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

console.log(length)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Fuction to generate password based on given selection of choices
function generatePassword() {
  passwordLength = window.prompt("Select length between 8 and 128");
  console.log("password length " + passwordLength);
  confirmLower = confirm("Would you like to use lowercase letters?");
    if(confirmLower === true) {
    console.log("lowercase" + confirmLower);
    
    } else {
    console.log("No lowercase numbers will be used");
    }
  confirmUpper = confirm("Would you like to use uppercase letters?");
    if(confirmUpper === true) {
      console.log("uppercase" + confirmUpper); 
    } else {
      console.log("No lowercase letters will be used");
    }
  confirmNumber = confirm("Would you like to use numbers?");
    if(confirmNumber === true) {
    console.log("number" + confirmNumber);
    } else {
    console.log("No numbers will be used");
    }
  confirmSymbol = confirm("Would you like to use symbols?");
    if(confirmSymbol === true) {
    console.log("symbol" + confirmSymbol);
    } else {
    console.log("No symbols will be used");
    }

  var passwordBlank = [];

for (var i =0; i < length; i++) {
  var allChoices = userChoices[Math.floor(math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

var password = passwordBlank.join("");
console.log("Your password is: " + password);
return password;

}

