alert("Digite um número de 1 a 12 e eu te informarei o mês e a estação do ano correspondente")

let mesAno = parseInt(prompt("Por favor digite o número"));

switch (mesAno) {
    case 1:
        alert("O mês é Janeiro e a estação correspondente é Verão");
        break;
    case 2:
        alert("O mês é Fevereiro e a estação correspondente é Verão");
        break;
    case 3:
        alert("O mês é Março e a estação correspondente é Outono");
        break;
    case 4:
        alert("O mês é Abril e a estação correspondente é Outono");
        break;
    case 5:
        alert("O mês é Maio e a estação correspondente é Outono");
        break;
    case 6:
        alert("O mês é Junho e a estação correspondente é Inverno");
        break;
    case 7:
        alert("O mês é Julho e a estação correspondente é Inverno");
        break;
    case 8:
        alert("O mês é Agosto e a estação correspondente é Inverno");
        break;
    case 9:
        alert("OO mês é Setembro e a estação correspondente é Primavera");
        break;
    case 10:
        alert("O mês é Outubro e a estação correspondente é Primavera");
        break;
    case 11:
        alert("O mês é Novembro e a estação correspondente é Primavera");
        break;
    case 12:
        alert("O mês é Dezembro e a estação correspondente é Verão");
        break;
    default:
        alert("Não existe mês e estação correspondente para esse número");
        break;
}