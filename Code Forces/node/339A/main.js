const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let numbers = read.split(`${os.EOL}`)[0].split("+").sort()

let result = numbers.toString()
for(let i=0; i < Math.floor(result.length)/2; i++ ){
    result = result.replace(",","+")
}

console.log(result)