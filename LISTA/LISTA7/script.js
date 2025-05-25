alert("Digite um número de 1 a 4 e eu te informarei a estação do ano correspondente");

let estacaoAno = parseInt(prompt("Por favor digite o número"));

switch (estacaoAno) {
    case 1:
        alert("A estação do ano é o Outono");
        break;
    case 2:
        alert("A estação do ano é o Inverno");
        break;
    case 3:
        alert("A estação do ano é o Primavera");
        break;
    case 4:
        alert("A estação do ano é o Verão");
        break;
    default:
        alert("Não existe estação correspondente para esse número");
        break;
}