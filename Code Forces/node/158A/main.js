const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split(`${os.EOL}`)

let nk = line[0].split(" ").map(a => parseInt(a))
let nPart = line[1].split(" ").map(a => parseInt(a))
let result = nPart.filter(a => a >= nPart[nPart.length-1] && a >= nk[1]).length

console.log(result)