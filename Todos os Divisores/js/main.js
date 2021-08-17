let fs = require("fs")
let X = parseInt(fs.readFileSync(0,"utf8"))

let result = []
for(let i=1; i <= X; i++){
    if(X%i===0){
        result.push(i)           
    }
}

console.log(...result)