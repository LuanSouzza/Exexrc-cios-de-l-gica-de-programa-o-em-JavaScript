alert("Tabuada");

let numero = parseInt(prompt("Digite um número"));
let contadora = 1

while (contadora < 11) {
    let resultado = numero * contadora
    console.log("O resultado do número " + numero + " *" + contadora + " é", resultado);
    contadora++
}