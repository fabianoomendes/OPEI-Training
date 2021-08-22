let fs = require("fs")
let line = fs.readFileSync(0,"utf8")
let inputs = line.split(" ")

let max = 0
for(let i=0; i < inputs.length; i++){
    inputs[i] = parseInt(inputs[i])
    if(max < inputs[i]){
        max = inputs[i]
    }
}

console.log(max)