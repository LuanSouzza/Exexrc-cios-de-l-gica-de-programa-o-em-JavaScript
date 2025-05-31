alert("Valor maior ou igual");

let numero1 = parseInt(prompt("Digite o 1° número"));
let numero2 = parseInt(prompt("Digite o 2° número"));

if (numero1 > numero2) {
    alert("O " + numero1 + " é o valor maior");
} else if (numero1 < numero2) {
    alert("O " + numero2 + " é o valor maior");
} else {
alert("Os dois números são iguais");
}