const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let lines = read.split(`${os.EOL}`)

if(lines[0].toLowerCase() === lines[1].toLowerCase()){
    console.log(0)
}else if(lines[0] > lines[1]){
    console.log(1)
}else {
    console.log(-1)
}