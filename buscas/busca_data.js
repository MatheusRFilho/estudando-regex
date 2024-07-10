const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf8');

const regexData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm;

const matchRegexData = banco.match(regexData);
console.log(matchRegexData);

