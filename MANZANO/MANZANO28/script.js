alert("Mensagem personalizada");

let nome = String(prompt("Digite o seu nome completo."));
let sexo = String(prompt("Digite M se seu sexo for masculino ou F se for feminino."));

switch (sexo) {
    case M:
        alert("Excelentissímo " + nome + " fico grato pelo Sr. utilizar o meu algoritmo.");
        break;
    case F:
        alert("Excelentissíma " + nome + " fico grato pelo Sra. utilizar o meu algoritmo.");
        break;
    default:
        alert("Por favor digite M ou F.");
        break;
}