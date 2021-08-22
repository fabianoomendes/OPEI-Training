let fs = require("fs")
let read = fs.readFileSync(0,"utf8")
let line = read.split("\n")

let T = parseInt(line[1]), B = parseInt(line[0])

const areaTot = 70 * 160
if(T > B){
    let areaT = ((T - B) * 70)/2
    let areaR = ((160 - T) * 70) + areaT
    let areaL = areaTot - areaR
    calcResult(areaL, areaR)
}else if(T < B){
    let areaT = ((B - T)*70)/2
    let areaL = (T * 70) + areaT
    let areaR = areaTot - areaL
    calcResult(areaL, areaR)
}else if(T === B){
    let areaL = 70 * T
    let areaR = areaTot - areaL
    calcResult(areaL, areaR)
}

function calcResult(areaL, areaR){
    if(areaL > areaR){
        console.log(1)
    }else if(areaL < areaR){
        console.log(2)
    }else if(areaL === areaR){
        console.log(0)
    }
}