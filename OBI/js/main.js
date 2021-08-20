let fs = require("fs")
let read = fs.readFileSync(0,"utf8");
let line = read.split("\n")

let P = parseInt(line[0].split(" ")[1])

let inputs = [],result = 0
for(let i=1; i < line.length; i++){
    inputs.push(line[i].split(" "))
    inputs[i-1][0] = parseInt(inputs[i-1][0])
    inputs[i-1][1] = parseInt(inputs[i-1][1])
    if(inputs[i-1][0] + inputs[i-1][1] >= P){
        result++
    }
}

console.log(result)