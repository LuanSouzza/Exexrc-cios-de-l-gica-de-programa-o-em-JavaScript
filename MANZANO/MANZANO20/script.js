alert("Média simples");

let nota1 = parseFloat(prompt("Digite a sua 1° nota"));
let nota2 = parseFloat(prompt("Digite a sua 2° nota"));
let nota3 = parseFloat(prompt("Digite a sua 3° nota"));
let nota4 = parseFloat(prompt("Digite a sua 4° nota"));

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert("Sua média é: " + media + " você foi aprovado!");
} else {
    let notaExame = parseFloat(prompt("Você foi reprovado! Digite a nota do exame"));
    let novaMedia = (notaExame + media) / 2
    if (novaMedia >= 5) {
        alert("Sua nova média é " + novaMedia + ", você foi aprovado!");
    } else {
        alert("Você foi reprovado!");
    }
}