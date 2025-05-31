alert("media de aproveitamento");

let nota1 = parseFloat(prompt("Digite o valor da sua primeira nota."));
let nota2 = parseFloat(prompt("Digite o valor da sua segunda nota."));
let nota3 = parseFloat(prompt("Digite o valor da sua terceira nota."));
let media = (nota1 + nota2 + nota3) / 3
let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + media) / 7

if (mediaAproveitamento < 6) {
    alert("Você tirou um D.");
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    alert("Você tirou um C.");
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    alert("Você tirou um B.");
} else if (mediaAproveitamento > 9) {
    alert("Voce tirou um A.");
}