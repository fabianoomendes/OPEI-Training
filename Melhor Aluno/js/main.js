let fs = require("fs")
let inputs = fs.readFileSync(0,"utf8").split(" ")
let A = parseFloat(inputs[0]), B = parseFloat(inputs[1])

if(A <= B){
    console.log("Pedro")
}else{
    console.log("Paulo")
}