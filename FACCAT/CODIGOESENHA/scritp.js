alert("Bem-vindo ao Clã do Jaja");

let codigo = 4321
let senha = 9999
let codigoInserido = parseInt(prompt("Insira o código de usuário"));

if (codigoInserido !== codigo) {
    alert("Usuário inválido!");
} else {
    let senhaInserida = parseInt(prompt("Insira a senha"));
    if (senhaInserida !== senha) {
        alert("Senha inválida!");
    } else {
        alert("Acesso permitido!");
    }
}