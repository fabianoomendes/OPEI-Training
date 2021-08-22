let fs = require("fs")
let read = fs.readFileSync(0, "utf8")
let line = read.split("\n")

let result = 0
for(let i=0; i < line[0].length;i++){
    if(line[0].substring(i,i+1) === line[1]){
        result++
    }
}

console.log(result)