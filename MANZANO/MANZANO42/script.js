alert("Somatório dos números de 1 a 500");

let contadora = 1
let somatorio = 0

do {
    somatorio = somatorio + contadora
    contadora = contadora + 1
} while (contadora < 501);

console.log("O somatório dos números de 1 a 500 é: " + somatorio);