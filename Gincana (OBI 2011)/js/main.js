let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

inputs = []
for(let i=0,i2=1; i2 < line.length; i++,i2++){
    inputs.push(line[i2].split(" ")) 
    for(let j=0; j < inputs[i].length; j++){
        inputs[i][j] = parseInt(inputs[i][j])
    }
}

let aux = []
for(let i=0; i < inputs.length; i++){
    for(let j=0; j < inputs[i].length; j++){
        let aux1 = 0
        for(let k=0; k < aux.length; k++){
            for(let l=0; l < aux[k].length; l++){
                if(aux[k][l] == inputs[i][j]){
                    aux[k].push(inputs[i])
                }else{
                    aux[aux.length] = inputs[i]
                    aux1++
                }
            }
        }
        if(aux1===0){
            // console.log("aqui")
            aux[aux.length] = inputs[i]    
        }   
    } 
}

console.log(aux)