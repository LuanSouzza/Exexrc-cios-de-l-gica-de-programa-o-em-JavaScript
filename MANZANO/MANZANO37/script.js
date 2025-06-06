alert("Somátorio e média simples.");

let contadora = 1
let somatorio = 0
let numero = 0

while (contadora < 11) {
    numero = parseInt(prompt("Digite o " + contadora + "° número inteiro: "));
    somatorio = somatorio + numero
    contadora = contadora + 1
}

let media = somatorio / 10

console.log("O somatório dos números inteiros inseridos é: " + somatorio);
console.log("A média dos números inteiros inseridos é: " + media);