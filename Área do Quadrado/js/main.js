let fs = require("fs")
let line = fs.readFileSync(0, "utf-8")

console.log(parseInt(line)**2)