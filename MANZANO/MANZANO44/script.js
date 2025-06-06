alert("Manzano 44");

let contadora = 1
let graoTrigo = 1
let totalGraos = 0

do {
    totalGraos = totalGraos + graoTrigo
    graoTrigo = graoTrigo * 2
    contadora = contadora + 1
} while (contadora < 65);

console.log("O somatório de todos os grâos de trigo são de: " + totalGraos); 