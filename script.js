const generateButton = document.getElementById("generate");
const clearButton = document.getElementById("clear");
const exitButton = document.getElementById("exit");
const passwordInput = document.getElementById("password");
const lengthSelect = document.getElementById("length");

const generatePassword = () => {
  const length = lengthSelect.value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }

  passwordInput.value = password;
};

generateButton.addEventListener("click", generatePassword);

clearButton.addEventListener("click", () => {
  passwordInput.value = "";
});

exitButton.addEventListener("click", () => {
  window.close();
});
