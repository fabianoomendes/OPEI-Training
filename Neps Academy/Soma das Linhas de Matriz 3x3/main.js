var fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let line0 = parseInt(line[0]) + parseInt(line[1]) + parseInt(line[2])
let line1 = parseInt(line[3]) + parseInt(line[4]) + parseInt(line[5])
let line2 = parseInt(line[6]) + parseInt(line[7]) + parseInt(line[8])

console.log("Linha 0: "+line0)
console.log("Linha 1: "+line1)
console.log("Linha 2: "+line2)