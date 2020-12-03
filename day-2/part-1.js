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


Object.values(data).forEach(val => {
    
   

    const char = val[0].substr(val[0].length-1, 1);
    const passwordPolicy = val[0].substr(0, val[0].length-2).split('-');
    const passwordPolicyMin = passwordPolicy[0];
    const passwordPolicyMax = passwordPolicy[1];
    const password = val[1];
    const charCount = password.split(char).length-1;

    
    if (charCount >= passwordPolicyMin && charCount <= passwordPolicyMax) {
        passwordCount += 1;
    }

  });

  console.log(passwordCount);