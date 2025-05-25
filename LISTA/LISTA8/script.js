alert("Digite sua idade e eu informarei sua faixa etária");

let idade = parseInt(prompt("Digite sua idade"));

if (idade <= 13) {
    alert("Você é uma criança");
} else if (idade <= 20) {
    alert("Você é um adolescente");
} else if (idade <= 60) {
    alert("Você é um adulto");
} else if (idade <= 100) {
    alert("Você é um idoso");
} else {
    alert("Provavelmente você está morto ._.");
}