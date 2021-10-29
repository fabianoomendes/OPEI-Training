const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split(`${os.EOL}`)

let x = 0
for(let i=0; i < line.length; i++){
    if(line[i] == "++X" || line[i] == "X++"){
        x++
    }else if(line[i] == "--X" || line[i] == "X--"){
        x--
    }
}

console.log(x)