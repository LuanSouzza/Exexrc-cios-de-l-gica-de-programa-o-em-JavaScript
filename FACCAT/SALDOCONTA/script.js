alert("saldoconta");

let numeroConta = parseInt(prompt("Digite o número da conta"));
let saldo = parseFloat(prompt("Digite seu saldo"));
let debito = parseFloat(prompt("Digite o valor dos serviços a serem cobrados"));
let credito = parseFloat(prompt("Digite o valor da sua fatura do cartão de crédito"));
let saldoFinal = saldo - (debito + credito)

if (saldoFinal < 0) {
   alert("Seu saldo atual é de: R$" + saldoFinal + " seu saldo está negativo");
} else {
   alert("Seu saldo atual é de: R$" + saldoFinal + " seu saldo está positivo");
}