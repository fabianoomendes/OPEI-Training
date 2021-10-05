let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\r\n")

let matriz = []
for(let i=1; i < line.length; i++){
    matriz[i-1] = line[i].split(" ")
    for(let j=0; j < matriz[i-1].length;j++){
        matriz[i-1][j] = parseInt(matriz[i-1][j])
    }
}

function returnProx(matriz, pos){
    let result = []
    for(let i=0; i < matriz.length; i++){
        if(matriz[i][1] === pos){
            if(result[pos] === undefined){
                result[pos] = [matriz[i][0]]
            }else{
                result[pos].push(matriz[i][0])
            }
        }
    }
    return result
}

let pos = [[0]], result = [],aux =0
for(let i=0; i < 7; i++){
    result[aux++] = returnProx(matriz, aux++)
}

console.log(matriz)
console.log(pos)
console.log(result)