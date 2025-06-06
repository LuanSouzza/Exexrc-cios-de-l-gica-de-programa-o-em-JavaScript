alert("Manzano 52");

let resultado = 0
let numero = parseInt(prompt("Digite um número"));

for (let contadora = 1; contadora < 11; contadora++) {
   resultado = numero * contadora
   console.log("O resultado do número " + numero + " * " + contadora + " é " + resultado);
}