let fs = require("fs")
let line = fs.readFileSync(0,"utf8")
let inputs = line.split(" ")

let a = Math.ceil(inputs[0] / inputs[2]) 
let b = Math.ceil(inputs[1] / inputs[2])

console.log(a*b)