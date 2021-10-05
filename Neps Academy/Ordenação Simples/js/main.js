let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")
let inputs = line[1].split(" ")

function parseIntArray(array){
    for(let i=0; i < inputs.length; i++){
        array[i] = parseInt(array[i])
    }
    return array
}

inputs = parseIntArray(inputs)
inputs.sort((a,b) => a - b)
console.log(...inputs)