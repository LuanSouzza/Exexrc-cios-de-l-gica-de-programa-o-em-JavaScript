alert("Manzano 47");

let contadora = 1
let contador = 1
let fatorial = 1

do {
    do {
        fatorial = fatorial * contador
        contador = contador + 1
    } while (contador < contadora);
    console.log("O Fatorial de " + contadora + " é ", fatorial);
    contadora = contadora + 2

} while (contadora < 10);