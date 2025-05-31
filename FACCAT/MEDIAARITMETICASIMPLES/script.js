alert("Média aritmetica simples");

let nota1 = parseFloat(prompt("Digite a 1° nota"));
let nota2 = parseFloat(prompt("Digite a 2° nota"));
let media = (nota1 + nota2) / 2

if (media >= 6) {
   alert("Aluno aprovado! Sua média é: " + media);
} else {
   alert("Aluno reprovado! Sua média é: " + media);
}