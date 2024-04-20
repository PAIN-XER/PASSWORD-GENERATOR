const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const upperLower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%{}[]/";

const allchar = upperCase + upperLower + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += upperLower[Math.floor(Math.random() * upperLower.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordBox.value = password;
}


function copyPassword (){
    passwordBox.select()
    document.execCommand("copy")
}