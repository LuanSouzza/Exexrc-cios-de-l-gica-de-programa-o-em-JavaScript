alert("Média simples");

let nota1 = parseFloat(prompt("Digite a sua 1° nota"));
let nota2 = parseFloat(prompt("Digite a sua 2° nota"));
let nota3 = parseFloat(prompt("Digite a sua 3° nota"));
let nota4 = parseFloat(prompt("Digite a sua 4° nota"));

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5) {
    alert("Sua média é: " + media + " você foi aprovado!");
} else {
    alert("Sua média é: " + media + " você foi reprovado!");
}