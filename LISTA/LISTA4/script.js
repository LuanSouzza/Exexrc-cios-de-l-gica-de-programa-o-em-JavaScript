alert("Digite um número de 1 a 12 e eu te informarei o mês o ano correspondente")

let mesAno = parseInt(prompt("Por favor digite o número"));

switch (mesAno) {
    case 1:
        alert("O mês correspondente é Janeiro");
        break;
    case 2:
        alert("O mês correspondente é Fevereiro");
        break;
    case 3:
        alert("O mês correspondente é Março");
        break;
    case 4:
        alert("O mês correspondente é Abril");
        break;
    case 5:
        alert("O mês correspondente é Maio");
        break;
    case 6:
        alert("O mês correspondente é Junho");
        break;
    case 7:
        alert("O mês correspondente é Julho");
        break;
    case 8:
        alert("O mês correspondente é Agosto");
        break;
    case 9:
        alert("OO mês correspondente é Setembro");
        break;
    case 10:
        alert("O mês correspondente é Outubro");
        break;
    case 11:
        alert("O mês correspondente é Novembro");
        break;
    case 12:
        alert("O mês correspondente é Dezembro");
        break;
    default:
        alert("Não existe mês correspondente para esse número");
        break;
}