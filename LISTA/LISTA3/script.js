alert("Digite um número de 1 a 7 e eu te informarei o dia da semana correspondente considerando que o 1° dia da semana é o Domingo")

let diaSemana = parseInt(prompt("Por favor digite o número"));

switch (diaSemana) {
    case 1:
        alert("O dia da semana é Domingo");
        break;
    case 2:
        alert("O dia da semana é Segunda-feira");
        break;
    case 3:
        alert("O dia da semana é Terça-feira");
        break;
    case 4:
        alert("O dia da semana é Quarta-feira");
        break;
    case 5:
        alert("O dia da semana é Quinta-feira");
        break;
    case 6:
        alert("O dia da semana é Sexta-feira");
        break;
    case 7:
        alert("O dia da semana é Sábado");
        break;
    default:
        alert("Não existe dia correspondente para esse número");
        break;
}