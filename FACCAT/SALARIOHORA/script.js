alert("salário por hora");

let horaTrabalhada = parseFloat(prompt("Digite o número de horas que você trabalhou esse mês"));
let salarioHora = parseFloat(prompt("Digite o seu salário por hora trabalhada"));

if (horaTrabalhada < 161) {
    let salarioTotal = horaTrabalhada * salarioHora
    alert("Seu salário é de: R$" + salarioTotal);
} else {
    let horaExtra = 160 * salarioHora + (horaTrabalhada - 160) * (salarioHora * (50 / 100) + salarioHora)
    alert("seu salário com as horas extras é de: R$" + horaExtra);
}