alert("Diferença do maior para o menor");

let valor1 = parseInt(prompt("Digite o 1° número inteiro"));
let valor2 = parseInt(prompt("Digite o 2° número inteiro"));

if (valor1 > valor2) {
    let diferenca = valor1 - valor2
    alert("o valor da diferença do maior número para o menor é de: " + diferenca);
} else {
    let diferenca = valor2 - valor1
    alert("o valor da diferença do maior número para o menor é de: " + diferenca);
}