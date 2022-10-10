// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let charBank = "";
  //password criteria
  let passwordLength = parseInt(prompt("Ingrese el número de caracteres de 8 a 128. "));
  console.log(passwordLength);
  let password = "";


  //THEN I choose a length of at least 8 characters and no more than 128 characters
  //&& -and || - either or 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Vuelva a introducir la nueva longitud de la contraseña");
    passwordLength = parseInt(prompt("Ingrese el número de caracteres de 8 a 128. "));
    console.log("Actualizada ", passwordLength);
  }

  // character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  let confirmLowerCase = confirm("¿Te gustaría incluir letras minúsculas?");
  console.log(confirmLowerCase);
  if (confirmLowerCase === true) {
    charBank = charBank + "abcdefghijklmnopqrstuvwxyz";
  }

  let confirmUpperCase = confirm("¿Le gustaría incluir letras mayúsculas??");
  console.log(confirmUpperCase);
  if (confirmUpperCase === true) {
    charBank = charBank + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let confirmNumeric = confirm("¿Te gustaría incluir números?");
  console.log(confirmNumeric);

  if (confirmNumeric === true) {
    console.log(passwordLength);
    charBank = charBank + "1234567890";
  }

  let confirmSpecialChar = confirm("¿Te gustaría incluir caracteres especiales?");
  console.log(confirmSpecialChar);

  if (confirmSpecialChar === true) {
    console.log(passwordLength);
    charBank = charBank + "!@#$%^&";
  }

  console.log("en base a todas las respuestas se crea mi lista de charbank ", charBank);

  //Generate random letters based on the carBank and the passowrd length 
  for(let i =0 ; i< passwordLength; i++){
    //generate a random letter from the charbank 
    let randomCharacter = charBank[Math.floor(Math.random() * charBank.length)]
    console.log(randomCharacter);
    //add to the password 
    password = password + randomCharacter;
  }

  return password; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
