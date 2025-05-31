alert("Valor maior 3");
let numero1 = parseInt(prompt("Digite o 1° número."));
let numero2 = parseInt(prompt("Digite o 2° número."));
let numero3 = parseInt(prompt("Digite o 3° número."));

if (numero1 > numero2 && numero2 > numero3) {
    alert("O maior número é o: " + numero1);
} else if (numero2 > numero1 && numero1 > numero3) {
    alert("O maior número é o: " + numero2);
} else if (numero3 > numero2 && numero2 > numero1) {
    alert("O maior número é o: " + numero3);
} else if (numero2 > numero3 && numero3 > numero1) {
    alert("O maior número é o: " + numero2);
} else if (numero3 > numero1 && numero1 > numero2) {
    alert("O maior número é o: " + numero3);
} else if (numero1 > numero3 && numero3 > numero2) {
    alert("O maior número é o: " + numero1);
}