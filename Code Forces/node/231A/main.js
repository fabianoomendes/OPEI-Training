const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let line = fs.readFileSync(0,"utf8")
let inputs = line.split(`${os.EOL}`)

let count1 = 0
for(let i=1; i < inputs.length; i++) {
    inputs[i] = inputs[i].split(" ")
    let count2 = 0
    for(let j=0; j < 3; j++){
        if(parseInt(inputs[i][j])){
            count2++
        }
    }
    if(count2 >= 2) {
        count1++
    }
}

console.log(count1)