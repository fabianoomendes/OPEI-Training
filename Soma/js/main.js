const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input[0])
let Y = parseInt(input[1])

console.log(X + Y)