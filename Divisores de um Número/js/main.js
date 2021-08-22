let fs = require("fs")
let N = parseInt(fs.readFileSync(0,"utf8"))

let dividers = [],sum = 0
for(let i=1; i <= N; i++){
    if(N%i === 0){
        dividers.push(i) 
        sum += i
    }
}

function arraytoString(array){
    let result = ""
    for(let i=0; i< array.length; i++){
        result += " "+array[i]
    }
    return result
}

console.log(dividers.length +" divisor(es):"+arraytoString(dividers))
console.log("Soma do divisores = "+sum)
if(dividers.length == 2){
    console.log("Primo")
}else{
    console.log("Nao primo")
}