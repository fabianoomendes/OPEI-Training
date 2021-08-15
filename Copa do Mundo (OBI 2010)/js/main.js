let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let inputs = []
for(let i=0; i < line.length; i++){
    inputs.push(line[i].split(" "))
    for(let j=0; j < inputs[i].length;j++){
        inputs[i][j] = parseInt(inputs[i][j]) 
    } 
}

let letter1 = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"],["K","L"],["M","N"],["O","P"]]

function proxjog(letter1,inputs){
    let letter2 = []
    let aux = []
    for(let i=0; i < letter1.length; i++){
        if(inputs[i][0] > inputs[i][1]){
            aux[i] = letter1[i][0]
        }else{
            aux[i] = letter1[i][1]
        }
    }

    let aux1 = 0
    for(let i=0; i < aux.length; i=i+2){
        letter2[aux1++] = [aux[i],aux[i+1]]
    }

    for(let i=0; i < letter2.length*2; i++){
        inputs.shift()
    }

    return [letter2,inputs]
}

let proxjogg = proxjog(letter1,inputs)
proxjogg = proxjog(proxjogg[0],proxjogg[1])
proxjogg = proxjog(proxjogg[0],proxjogg[1])
proxjogg = proxjog(proxjogg[0],proxjogg[1])
console.log(proxjogg[0][0][0])