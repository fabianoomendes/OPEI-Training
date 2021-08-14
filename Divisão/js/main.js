var fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let A = parseFloat(line[0])
let B = parseFloat(line[1])

let result = (A / B).toFixed("2")

console.log(result)