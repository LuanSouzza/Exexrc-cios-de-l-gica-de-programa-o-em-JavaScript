alert("Somátorio e média simples dos números pares de 50 a 70.");

let contadora = 50
let somatorio = 0
let pares = 0

while (contadora < 71) {
    if (contadora % 2 == 0) {
        somatorio = somatorio + contadora
        pares = pares + 1
    }
    contadora = contadora + 1
}

let media = somatorio / pares

alert("O somatório dos números pares de 50 a 70 é: " + somatorio);
alert("A média dos números pares de 50 a 70 é: " + media);