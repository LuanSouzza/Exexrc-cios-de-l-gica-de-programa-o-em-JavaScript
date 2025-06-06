alert("Manzano 49");

let numeroMaior = -999999
let numeroMenor = 999999
let numero = 0

do {
   numero = parseInt(prompt("Digite um número: "));
   if (numero >= 0 && numero > numeroMaior) {
      numeroMaior = numero
   } else if (numero < numeroMenor) {
      numeroMenor = numero
   }
} while (numero > 0);

alert("O maior número foi: " + numeroMaior);
alert("O menor número foi: " + numeroMenor);