const fs = require('fs');
const lines = fs.readFileSync('map.txt', {encoding: 'utf-8'}).split('\n');
let forestMap = [];
let currentPosition = 3;
let count = 0

lines.forEach(line => {
    let newLine = line.repeat(32);
    forestMap.push(newLine);
});

for(let i = 1; i < forestMap.length; i++) {
    if(forestMap[i][currentPosition] === '#') {
        count += 1;
    }
    currentPosition += 3;
}

console.log(count);

