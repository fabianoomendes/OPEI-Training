var fs = require("fs")
let read = fs.readFileSync(0, "utf-8")
let line = read.split("\n")

let N = parseInt(line[0])

let divs = 2;
let divisores = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
for(let i=0; i <= divisores.length && i <= N; i++){  
    if(N%divisores[i] === 0 && divisores[i] != N){
        divs++
    }
    if(divs>2){
        break
    }
}

if(N >= 2 && divs === 2){
    console.log("S")
}else{
    console.log("N")
}