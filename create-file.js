const fs = require('fs');

// Content to write into the file
const content = 'Hello Node';

// Write the content to the "welcome.txt" file
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log('File "welcome.txt" has been created with the content: "Hello Node"');
  }
});
