let fs = require("fs")
let line = fs.readFileSync(0,"utf8")
let inputs = line.split(" ")

inputs = inputs.map(parseFloat)

let max=0, min = 10
for(let i=0; i < inputs.length; i++){
    if(max < inputs[i]){
        max = inputs[i]
    }
    if(min > inputs[i]){
        min = inputs[i]
    }
}

inputs.splice(inputs.indexOf(max),1) 
inputs.splice(inputs.indexOf(min),1) 
let sum = parseFloat(inputs[0]+inputs[1]+inputs[2])
console.log(sum.toFixed(1))