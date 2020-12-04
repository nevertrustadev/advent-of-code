const report = require ('./expenseReport.js');

for (let i=0; i < report.length; i++){
    for (let y = 0; y < report.length; y++) {
        let calculation = report[i] + report[y];

        if (calculation === 2020) {
            console.log(report[i] * report[y]);
            return;
        }
    }
}
