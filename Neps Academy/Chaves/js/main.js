let fs = require("fs")
let read = fs.readFileSync(0,"utf-8")
let line = read.split("\n")

let count1 = 0
let count2 = 0
for(let i=1; i < line.length; i++){
    for(let j=0; j < line[i].length; j++){
        if(line[i].substring(j,j+1) == "{"){
            count1++
        }else if(line[i].substring(j,j+1) == "}"){
            count2++
        }
    }
}

if(count1 === count2){
    console.log("S")
}else{
    console.log("N")
}