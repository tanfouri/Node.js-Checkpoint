const fs = require('fs');

// Read the content from the "welcome.txt" file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Data from "welcome.txt":', data);
  }
});
