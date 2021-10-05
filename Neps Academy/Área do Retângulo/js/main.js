let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")

let A = parseInt(line[0]), B = parseInt(line[1])
console.log(A*B)