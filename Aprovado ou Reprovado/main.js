let fs = require("fs")
let read = fs.readFileSync(0, "utf-8")
let inputs = read.split(" ")

let media = ((parseFloat(inputs[0]) + parseFloat(inputs[1]))/2).toFixed(2)

if(media < 4){
    console.log("Reprovado")
}else if(media >= 4 && media < 7){
    console.log("Recuperacao")
}else{
    console.log("Aprovado")
}