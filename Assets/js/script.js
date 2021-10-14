// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function(event) {
  event.preventDefault();
  var passwordLength = document.querySelector("input[name='password-Length']").value;
  var passwordlowercase = document.querySelector("select[name='lowercase']").value;
  var passworduppercase = document.querySelector("select[name='uppercase']").value;
  var passwordnumeric = document.querySelector("select[name='numeric']").value;
  var passwordspecial = document.querySelector("select[name='special']").value;

  var passwordGenerateObj = {

  pwdLength: passwordLength,
  pwdLowercase: passwordlowercase,
  pwdUppercase: passworduppercase,
  pwdNumeric: passwordnumeric,
  pwdSpecialcase: passwordspecial

  };

  console.log(passwordGenerateObj);

  generatePassword(passwordGenerateObj);

}

// Add event listener to generate button

var generatePassword = function(passwordGenerateObj) {
  
  console.log(passwordGenerateObj)

  switch(passwordGenerateObj.pwdLowercase){
  
    case "Yes":
      passwordGenerateObj.pwdLowercase = "abcdefghijklmnopqrstuvwxyz";

      break;
    case "No":
      passwordGenerateObj.pwdLowercase = "";
      break;
  }

  switch(passwordGenerateObj.pwdUppercase){
    case "Yes":
      passwordGenerateObj.pwdUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case "No":
      passwordGenerateObj.pwdUppercase = "";
      break;
  }

  switch(passwordGenerateObj.pwdNumeric){
    case "Yes":
      passwordGenerateObj.pwdNumeric = "012345678901234567891234";
      break;
    case "No":
      passwordGenerateObj.pwdNumeric = "";
      break;
  }

  switch(passwordGenerateObj.pwdSpecialcase){
    case "Yes":
      passwordGenerateObj.pwdSpecialcase = "!@#$%^&*()!@#$%^&*()!@#$";
      
      break;
    case "No":
      passwordGenerateObj.pwdSpecialcase = "";
      break;
  }

var passwordFormat =  passwordGenerateObj.pwdLowercase + passwordGenerateObj.pwdUppercase + passwordGenerateObj.pwdNumeric + passwordGenerateObj.pwdSpecialcase;

console.log(passwordFormat)

var password = ""

for (var i =0; i < passwordGenerateObj.pwdLength; i++){ 

  
  var randomNumber = Math.floor(Math.random()* passwordFormat.length); 
  //numbers that gives us the positions

  password = password + passwordFormat[randomNumber]
  
  console.log(password)

}

  var passwordText = document.querySelector("#password");
  console.log(passwordText)

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
