let maiorNumero = -999999
let menorNumero = 999999

let numero = parseInt(prompt("Digite um número inteiro: "));

while (numero >= 0) {
    numero = parseInt(prompt("Digite um número inteiro: "));
    if (numero > maiorNumero) {
        maiorNumero = numero
    } else if (numero < menorNumero) {
        menorNumero = numero
    }
}

alert("O maior número foi: " + maiorNumero);
alert("O menor número foi: " + menorNumero);