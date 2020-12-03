const fs = require('fs');
let data = {};
const lines = fs.readFileSync('passwordData.txt', {encoding: 'utf-8'}).split('\n');
let passwordCount = 0;
let counter = 1;

// Create data object from file
lines.forEach(element => {

    data[counter] = element.split(":");
    counter ++ 

});

// Work out how many passwords are valid
Object.values(data).forEach(val => {
    const char = val[0].substr(val[0].length-1, 1);
    const passwordPolicy = val[0].substr(0, val[0].length-2).split('-');
    const positionOne = passwordPolicy[0]-1;
    const positionTwo = passwordPolicy[1]-1;
    const password = val[1].trim();
    
    if ((password[positionOne] === char && password[positionTwo] !== char) || (password[positionTwo] === char && password[positionOne] !== char)) {
        passwordCount += 1;
    }

  });

  console.log(passwordCount);