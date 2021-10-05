let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")

line = line.map(parseFloat)

if((line[0] > line[3]) && (line[1] >= line[2])){
    console.log(1)
}else if((line[2] > line[1]) && (line[0] <= line[3])) {
    console.log(2)
}else if((line[0] == line[3]) || (line[1] == line[2])){
    console.log(-1)
}

console.log(line)