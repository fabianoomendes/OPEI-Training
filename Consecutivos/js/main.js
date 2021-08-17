let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")
let inputs = line[1].split(" ")

let ant=0,atu=0,aux1=1,aux2=0
let result = []
for(let i=0; i < inputs.length; i++){
    inputs[i] = parseFloat(inputs[i])
    atu = inputs[i]
    if(ant === atu && i != 0){
        aux1++
        result[aux2] = aux1
    }else if(i != 0){
        aux2++
        aux1=1
        result[aux2] = aux1
    }
    ant = atu
}

let max=0
for(let i=0; i < result.length; i++){
    if(max < result[i]){
        max = result[i]
    }
}

console.log(max)