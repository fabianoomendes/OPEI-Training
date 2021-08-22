let fs = require("fs")
let read = fs.readFileSync(0, "utf8")
let line = read.split("\n")

line = line.map(parseFloat);
let min = line[1],inputs = []

for(let i=2; i < line.length;i++){
    inputs.push(line[i])
}
inputs.sort((a,b) => b - a)
let result = [],ant = inputs[0]

for(let i=0; i < inputs.length; i++){
    if(i < min || inputs[i] == ant){
        result.push(inputs[i])
    }else{
       break 
    }
    ant = inputs[i]
}

console.log(result.length)