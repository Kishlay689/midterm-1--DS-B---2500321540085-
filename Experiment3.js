const fs = require('fs');


fs.writeFileSync('demo.txt', 'Hello kishlay!');


console.log(fs.readFileSync('demo.txt', 'utf8'));


fs.appendFileSync('demo.txt', '\nWelcome to Node.js');


console.log(fs.readFileSync('demo.txt', 'utf8'));


fs.unlinkSync('demo.txt');

console.log('File deleted successfully');