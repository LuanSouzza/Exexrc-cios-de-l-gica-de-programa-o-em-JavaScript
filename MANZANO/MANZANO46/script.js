alert("Manzano 46");

let numero = 0
let somatorio = 0
let numerosDigitados = 0
let media = 0

do {
    numero = parseFloat(prompt("Digite um número inteiro: "));
    if (numero >= 0) {
        somatorio = somatorio + numero
    }
    numerosDigitados = numerosDigitados + 1
} while (numero > 0);

media = somatorio / numerosDigitados

alert("Somatório: " + somatorio + " média: " + media + " números digitados: " + numerosDigitados);