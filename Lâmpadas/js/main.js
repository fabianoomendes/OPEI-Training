var fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let inputs = line[1].split(" ")
for(let i=0; i < inputs.length; i++){
    inputs[i] = parseInt(inputs[i])
}

let A = false
let B = false 

for(let i=0; i < inputs.length; i ++){
    if(inputs[i] === 2){
        A = !A
        B = !B
    }else if(inputs[i] === 1){
        A = !A
    }
}

console.log(A ? 1 : 0)
console.log(B ? 1 : 0)