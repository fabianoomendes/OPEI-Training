const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let line = fs.readFileSync(0,"utf8")
let inputs = line.split(`${os.EOL}`)

for(let i=1; i < inputs.length; i++){
    if(inputs[i].length > 10){
        console.log(`${inputs[i].charAt(0)}${inputs[i].length-2}${inputs[i].charAt(inputs[i].length - 1)}`)
    }else{
        console.log(inputs[i])
    }
}