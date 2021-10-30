const os = require('os');
const anonimo = process.argv.indexOf('-a') !== -1
let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let lines = read.split(`${os.EOL}`)
let line = lines[0]

const vogais = ["a",'o',"y","e","u","i"]

function isVogal(letter){
    let result = []
    for(let i=0; i < vogais.length; i++){
        if(letter != vogais[i]){
            result.push(false)
        }else{
            result.push(true)
        }
    }
    return result.reduce((acu, atu) => acu || atu)
}

function trimAll(str){
    let aux = ''
    for(let i=0; i < str.length; i++){
        if(str.substr(i, 1) != " "){
            aux += str.substr(i, 1) 
        }
    }
    return aux
}

let arrayLetters = trimAll(line).toLowerCase().split('')
arrayLetters = arrayLetters.filter(letter => !isVogal(letter))

let result = ''
for(let i=0; i < arrayLetters.length; i++){
    if(!isVogal(arrayLetters[i])){
        result += '.'+arrayLetters[i]
    }else{
        result += arrayLetters[i]
    }
}

console.log(result)