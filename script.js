// Assignment code here

var obj = {
  
  numbers: [1,2,3,4,5,6,7,8,9],
  symbols: ["!","@", "#","$","%","^","&","*","(",")"],
  uppercase: [""],
  lowercase: ["a"],
}

length = [""]


console.log(Object.values(obj));


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


// Fuction to generate password based on given selection of choices
function generatePassword() {
  passwordLength = window.prompt("Select length between 8 and 128");
  console.log("password length " + passwordLength);
  if (!passwordLength) {
    window.alert("You must enter a number between 8 and 128");
    return;
    
  }
  confirmLower = confirm("Would you like to use lowercase letters?");
    if(confirmLower===true) {
      console.log("lowercase" + confirmLower)
    } else {
      console.log("No lowercase letters will be used");
    }

  confirmUpper = confirm("Would you like to use uppercase letters?");
    if(confirmUpper === true) {
      console.log("uppercase" + confirmUpper); 
    } else {
      console.log("No uppercase letters will be used");
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

    var passwordBlank = [""];

  for (var i = 0; i < length; i++) {
  var password = (obj)[Math.floor(math.random() * password.length)];
  passwordBlank.push();}
  if (password) {
    console.log("obj");
  } else {
    console.log("nada");
  }

  var password = passwordBlank.join("");

  console.log("Your password is: " + password);
  return password;

}


