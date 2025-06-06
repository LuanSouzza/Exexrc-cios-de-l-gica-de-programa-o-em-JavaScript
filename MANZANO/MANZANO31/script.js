alert("Somatório dos números pares");

let contadora = 1
let somatorio = 2

while (contadora < 501) {
    if (contadora % 2 == 0) {
        console.log("Somatório" + somatorio);
        somatorio = somatorio + contadora
    }
    contadora++
}