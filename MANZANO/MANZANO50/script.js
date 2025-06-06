alert("Manzano 50");

let dividendo = parseFloat(prompt("Informe o primeiro número (dividendo): "));
let divisor = parseFloat(prompt("Informe o segundo número (divisor): "));
let quociente = 0
let resto = dividendo

do {
   resto = resto - divisor
   quociente = quociente + 1

} while (divisor < resto);

alert("Resultado da divisão inteira é: " + quociente);