let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let result = 0
for(let i=1; i < line.length;i++){
    let aux = line[i].split(" ")
    if(parseInt(aux[0]) > parseInt(aux[1])){
        result += parseInt(aux[1])
    }
}

console.log(result)