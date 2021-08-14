var fs = require("fs")
let read = fs.readFileSync(0, "utf8")
let line = read.split("\n")
let B = parseInt(line[0])
let C = parseInt(line[1])

if((B + C) % 2 == 0){
    console.log("Bino")
}else{
    console.log("Cino")
}