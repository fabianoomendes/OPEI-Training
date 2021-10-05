let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")
let inputs = line[1].split(" ")

for(let i=0; i < inputs.length; i++){
    console.log(Math.sqrt(parseFloat(inputs[i])).toFixed(4))
}