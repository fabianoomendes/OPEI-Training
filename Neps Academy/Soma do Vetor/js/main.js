let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")

let inputs = line[1].split(" "),sum = 0
for(let i = 0; i < inputs.length;i++){
    sum += parseFloat(inputs[i])
}

console.log(sum)