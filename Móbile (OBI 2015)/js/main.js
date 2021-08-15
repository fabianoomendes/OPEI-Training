let fs = require("fs")
let read = fs.readFileSync(0, "utf-8")
let line = read.split("\n")

let A = parseInt(line[0])
let B = parseInt(line[1])
let C = parseInt(line[2])
let D = parseInt(line[3])

let result = "S"

if(!(A === B+C+D)){
    result = "N"
}

if(!(B + C === D)){
    result = "N"
}

if(!(B === C)){
    result = "N"
}

console.log(result)