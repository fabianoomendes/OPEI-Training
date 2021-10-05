// Importando o módulo
var fs = require("fs");

// Lendo o conteúdo da linha de comando
let leitura = fs.readFileSync(0, "utf8");

// Dividindo a leitura nas quebras de linha, ou seja, "\n"
let linhas = leitura.split("\n");

// Obtendo os valores separados
let A = parseInt(linhas[0]);
let B = parseInt(linhas[1]);

// Realizando a soma
let soma = A + B;

// Imprimindo a soma
console.log(soma);