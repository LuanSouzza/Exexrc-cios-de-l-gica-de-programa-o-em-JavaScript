alert("Nagativo para positivo");

let valor = parseInt(prompt("Digite um número inteiro"));

if (valor < 0) {
    valor = valor * -1
    alert("O número informado foi convertido para um número positivo sendo este:" + valor);
} else {
    alert("O número informado é o: " + valor);
}