let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let inputs = read.split(" ")

let P = Boolean(parseInt(inputs[0]))
let R = Boolean(parseInt(inputs[1]))

if(!P){
    console.log("C")
}else if(R){
    console.log("A")
}else{
    console.log("B")
}