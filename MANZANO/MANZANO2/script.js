alert(("Conversor de temperatura de Graus Fahrenheit para Celsius."));
let grausFahrenheit = parseFloat(prompt("Digite o valor de uma temperatura em graus Fahrenheit."));

let grausCelsius = (grausFahrenheit - 32) * (5 / 9)

alert("O resultado da conversão é de:" + grausCelsius + "° C.");