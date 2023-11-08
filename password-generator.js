const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,             // Password length
    numbers: true,          // Include numbers
    symbols: true,          // Include symbols
    uppercase: true,        // Include uppercase letters
    strict: true,           // Avoid ambiguous characters
  });

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Random Password:', randomPassword);
