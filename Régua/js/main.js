let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")

let K = parseInt(line[0])
let aux = line[1].split(" ")
let X = parseInt(aux[0]), Y = parseInt(aux[1])

if(X >= Y){
    if((X-Y) >= K){
        console.log("EH SUFICIENTE")
    }else{
        console.log("NAO EH SUFICIENTE")
    }
}else if(X < Y){
    if((Y-X) >= K){
        console.log("EH SUFICIENTE")
    }else{
        console.log("NAO EH SUFICIENTE")
    }
}