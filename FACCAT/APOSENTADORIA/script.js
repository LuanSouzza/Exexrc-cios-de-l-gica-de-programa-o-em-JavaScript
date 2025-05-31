alert("Requerimento de aposentadoria 2025");

let idFuncionario = parseInt(prompt("Insira seu código de funcionário, sendo 1111 para funcionários masculinos e 2222 para femininos."));


if (idFuncionario == 1111) {
    let anoNascimento = parseInt(prompt("Digite os 4 carácteres do seu ano de nascimento."));
    let anoRegistro = parseInt(prompt("Digite os 4 carácteres do seu ano de ingresso na empresa."));
    let idade = 2025 - anoNascimento
    let tempoTrabalhado = 2025 - anoRegistro
    if (idade >= 65 && tempoTrabalhado >= 30) {
        alert("Você tem: " + idade + " anos, seu tempo trabalhado foi de:" + tempoTrabalhado + " anos e sua aposentadoria está disponível.");
    } else {
        alert("Você tem: " + idade + " anos, seu tempo trabalhado foi de:" + tempoTrabalhado + " anos e sua aposentadoria está indisponível.");
    }
} else if (idFuncionario == 2222) {
    let anoNascimento = parseInt(prompt("Digite os 4 carácteres do seu ano de nascimento."));
    let anoRegistro = parseInt(prompt("Digite os 4 carácteres do seu ano de ingresso na empresa."));
    let idade = 2025 - anoNascimento
    let tempoTrabalhado = 2025 - anoRegistro
    if (idade >= 60 && tempoTrabalhado >= 25) {
        alert("Você tem: " + idade + " anos, seu tempo trabalhado foi de:" + tempoTrabalhado + " anos e sua aposentadoria está disponível.");
    } else {
        alert("Você tem: " + idade + " anos, seu tempo trabalhado foi de:" + tempoTrabalhado + " anos e sua aposentadoria está indisponível.");
    }
} else if (idFuncionario !== 1111 && 2222) {
    alert("Registro inexistente");
}