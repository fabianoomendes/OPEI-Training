let fs = require("fs")
let read = fs.readFileSync(0, "utf-8")
let line = read.split("\n")

let matriz = []
for(let i=1; i < line.length; i++){
    matriz.push(line[i].split(" "))
    for(let j=0; j < matriz[i-1].length; j++){
        matriz[i-1][j] = parseInt(matriz[i-1][j]) 
    }
}

let sum = 0
for(let i=0; i < matriz[0].length; i++){
    sum += matriz[0][i]
}

let result = sum

for(let i=1; i < matriz.length; i++){
    let aux = 0
    for(let j=0; j < matriz[i].length; j++){
        aux += matriz[i][j]
    }
    if(sum === aux){
        result = sum
    }else{
        result = -1
        break
    }
}

if(result === -1){
    for(let i=0; i < matriz[0].length; i++){
        let aux = 0
        for(let j=0; j < matriz.length; j++){
            aux += matriz[j][i]
        }
        if(sum === aux){
            result = sum
        }else{
            result = -1
            break
        }
    }
}

if(result === -1){
    let aux = 0
    for(let i=0; i < matriz.length; i++){        
        aux += matriz[i][i]        
    }    
    if(sum === aux){
        result = sum
    }else{
        result = -1
    }
}

if(result === -1){
    let aux = 0
    for(let i=matriz.length-1; i >= 0; i--){        
        aux += matriz[i][i]        
    }    
    if(sum === aux){
        result = sum
    }else{
        result = -1
    }
}

console.log(result)