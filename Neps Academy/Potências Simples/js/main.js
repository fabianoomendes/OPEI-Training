let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let input = read.split(" ")

let x = parseFloat(input[0])
let y = parseFloat(input[1])

console.log((x**y).toFixed(4))