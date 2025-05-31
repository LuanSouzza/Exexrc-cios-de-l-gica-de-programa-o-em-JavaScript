alert("idadeparavotar");

let anoAtual = parseInt(prompt("Digite o ano atual"));
let anoNascimento = parseInt(prompt("Digite o em que você nasceu"));
let idade = anoAtual - anoNascimento

if (idade >= 16) {
    alert("Pode votar!")
} else {
    alert("Não pode votar!")
}