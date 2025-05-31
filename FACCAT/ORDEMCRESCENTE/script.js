alert("ordemcrescente");

let numero1 = parseInt(prompt("Digite o 1° número"));
let numero2 = parseInt(prompt("Digite o 2° número"));


if (numero1 > numero2) {
    alert("A ordem crescente dos valores informados é de: " + numero2 + " e" + numero1);
} else {
    alert("A ordem crescente dos valores informados é de: " + numero1 + " e" + numero2);
}