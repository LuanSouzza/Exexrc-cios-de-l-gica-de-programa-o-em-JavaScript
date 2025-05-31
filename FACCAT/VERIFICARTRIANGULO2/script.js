alert("Verificar triangulo 2");

let ladoA = parseInt(prompt("Digite o tamanho do 1° lado do triângulo em cm."));
let ladoB = parseInt(prompt("Digite o tamanho do 2° lado do triângulo em cm."));
let ladoC = parseInt(prompt("Digite o tamanho do 3° lado do triângulo em cm."));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB || ladoA == ladoB && ladoB == ladoC) {
    let triangulo = "Triângulo Equilátero."
    alert(triangulo);
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    let triangulo = "Triângulo Isósceles."
    alert(triangulo);
} else if (ladoA > ladoB && ladoB > ladoC || ladoA > ladoC && ladoC > ladoB || ladoB > ladoA && ladoA > ladoC || ladoB > ladoC && ladoC > ladoA || ladoC > ladoA && ladoA > ladoB || ladoC > ladoB && ladoB > ladoA) {
    let triangulo = "Triângulo Escaleno."
    alert(triangulo);
} else {
    let triangulo = "Não é possivel formar um triângulo."
    alert(triangulo);
}