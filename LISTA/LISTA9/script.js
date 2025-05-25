alert("Tipos de Triângulo");
alert("Digite o valor dos 3 lados de um triângulo e eu informarei se este é Equilátero, Isósceles ou Escaleno");

let ladoA = parseInt(prompt("Digite o tamanho do 1° lado do triângulo em cm."));
let ladoB = parseInt(prompt("Digite o tamanho do 2° lado do triângulo em cm."));
let ladoC = parseInt(prompt("Digite o tamanho do 3° lado do triângulo em cm."));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("O Triângulo é Equilátero");
} else if (ladoA == ladoB && ladoB == ladoC) {
    alert("O Triângulo é Equilátero");
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    alert("O Triângulo é Isósceles");
} else if (ladoA > ladoB && ladoB > ladoC || ladoA > ladoC && ladoC > ladoB || ladoB > ladoA && ladoA > ladoC || ladoB > ladoC && ladoC > ladoA || ladoC > ladoA && ladoA > ladoB || ladoC > ladoB && ladoB > ladoA) {
    alert("O Triângulo é Escaleno");
}else{
     alert("Não é possivel formar um triângulo");
}