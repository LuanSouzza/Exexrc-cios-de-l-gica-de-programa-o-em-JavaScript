let time1 = String(prompt("Digite o nome de um time"));
let gols1 = parseInt(prompt("Digite o número de gols feitos pelo " + time1));
let time2 = String(prompt("Digite o nome de outro time"));
let gols2 = parseInt(prompt("Digite o número de gols feitos pelo " + time2));

if (gols1 > gols2) {
    alert("O " + time1 + " venceu o " + time2 + " por " + gols1 + " a" + gols2);
} else if (gols1 < gols2) {
    alert("O " + time2 + " venceu o " + time1 + " por " + gols2 + " a" + gols1);
} else {
    alert("A partida terminou em empate")
}