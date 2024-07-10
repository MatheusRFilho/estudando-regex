const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf8');

const regex = /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm;

const matchRegex = banco.match(regex);
console.log(matchRegex);


const regex2 = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm;
const matchRegex2 = banco.match(regex2);
console.log(matchRegex2);
