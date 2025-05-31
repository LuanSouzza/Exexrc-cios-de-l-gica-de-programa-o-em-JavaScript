alert("Jogo de xadrez");
let horaInicial = parseInt(prompt("Digite a hora inicial"));
let horaFinal = parseInt(prompt("Digite a hora final"));
let duracao = horaFinal - horaInicial

if (duracao < 0) {
    duracao = duracao + 24
}
alert("o jogo durou", duracao, "horas");