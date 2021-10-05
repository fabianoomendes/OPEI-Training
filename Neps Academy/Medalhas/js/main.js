let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let inputs = read.split("\n")

let max=0
let middle = 0
let min=1001
for(let i=0; i < inputs.length; i++){
    inputs[i] = parseInt(inputs[i])
    if(max < inputs[i]){
        max=inputs[i]
    }
    if(min > inputs[i]){
        min=inputs[i]
    }
}

for(let i=0; i < inputs.length; i++){
    if(max != inputs[i] && min != inputs[i]){
        middle = inputs[i]
    }
}
console.log(inputs.indexOf(min)+1)
console.log(inputs.indexOf(middle)+1)
console.log(inputs.indexOf(max)+1)