const fs = require("input.txt");
const input = fs.readFileSync(0, "utf8");
let cont1=0,cont2=0;
for(let i=0; i < input.length; i++){
    if(input[i] == `}`){
        cont1++;
    }
    if(input[i] == `{`){
        cont2++;
    }
}

if(cont1 == cont2 || (cont1 + cont2) == 0){
    console.log("S");
}else{
    console.log("N");
}