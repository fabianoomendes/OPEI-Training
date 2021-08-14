let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split(" ")

let x = parseInt(line[0])
let y = parseInt(line[1])
let m = parseInt(line[2])

if(((x >= 0) && (x <= 10**18)) && ((y >= 0) && (y <= 10**18)) && ((m >= 1) && (m <= 10**18))){
    console.log((x*y)%m)
}