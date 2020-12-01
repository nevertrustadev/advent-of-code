const report = require ('./expenseReport.js');

for (let i=0; i < report.length; i++){
    for (let y = 0; y < report.length; y++) {
        for(let z =0; z < report.length; z++) {
            let calculation = report[i] + report[y] + report[z];

            if (calculation === 2020) {
                console.log(report[i] * report[y] * report[z]);
                return;
            }
        z++;
        }    
    }
}