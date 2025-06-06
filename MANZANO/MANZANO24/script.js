alert("Maior e menor valor");

let valor1 = parseInt(prompt("Digite o 1° número"));
let valor2 = parseInt(prompt("Digite o 2° número"));
let valor3 = parseInt(prompt("Digite o 3° número"));
let valor4 = parseInt(prompt("Digite o 4° número"));
let valor5 = parseInt(prompt("Digite o 5° número"));
let maior = 0
let menor = 0

if (valor1 > valor2) {
    maior = valor1
    menor = valor2
} else {
    maior = valor2
    menor = valor1
}
if (valor3 > maior) {
    maior = valor3
} else if (menor > valor3) {
    menor = valor3
}
if (valor4 > maior) {
    maior = valor4
} else if (menor > valor4) {
    menor = valor4
}
if (valor5 > maior) {
    maior = valor5
} else if (menor > valor5) {
    menor = valor5
}
alert("O maior valor é o " + maior + " e o menor valor é o " + menor);