const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf8');

const regexCpf = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;

const matchRegexCpf = banco.match(regexCpf);
console.log(matchRegexCpf);

