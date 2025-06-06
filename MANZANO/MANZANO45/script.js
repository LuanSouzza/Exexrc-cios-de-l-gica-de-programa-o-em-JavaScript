alert("Manzano 45");

let numero = 0
let somatorio = 0
let contadora = 1
let fatorial = 1
let contador = 1

do {
    numero = parseInt(prompt("Digite o " + contadora + "º valor: "));
    do {
        fatorial = fatorial * contador
        contador = contador + 1
    } while (contador < numero + 1);

    somatorio = somatorio + fatorial
    contadora = contadora + 1
} while (contadora < 16);

alert("O somatório dos fatoriais dos números digitados é: " + somatorio);