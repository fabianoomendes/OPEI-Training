const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let matriz = read.split(`${os.EOL}`).map(element => element.split(" ").map(a => parseInt(a)))

let pos1 = null
for(let i=0; i < matriz.length; i++){
    for(let j=0; j < matriz[i].length; j++){
        if(matriz[i][j]){
            pos1 = [i, j]
        }
    }
}

function exec(colOrLine, pos1, count = 0){
    if(pos1[colOrLine] < 2){
        for(let i=pos1[colOrLine]; i < 2; i++){            
            count++
        }
    }else if(pos1[colOrLine] > 2){
        for(let i=pos1[colOrLine]; i > 2; i--){            
            count++
        }
    }
    return count
}

let count = exec(0, pos1)
count = exec(1, pos1, count)

console.log(count)