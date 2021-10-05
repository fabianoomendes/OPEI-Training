let fs = require("fs")
let input = parseFloat(fs.readFileSync(0,"utf8"))

function fib(n){
    if(n===0 || n===1){
        return 1
    }else{
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(input))