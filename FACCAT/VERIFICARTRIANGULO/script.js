alert("Verificar triangulo");

let valorA = parseInt(prompt("Digite o valor A"));
let valorB = parseInt(prompt("Digite o valor B"));
let valorC = parseInt(prompt("Digite o valor C"));

if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
    alert("Os valores informados formam um triângulo.");
} else {
    alert("Os valores informados não formam um triângulo.");
}