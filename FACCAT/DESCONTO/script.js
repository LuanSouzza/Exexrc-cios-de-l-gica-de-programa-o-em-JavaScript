let nome = String(prompt("informe no nome do produto."));
let quantidade = parseInt(prompt("informe a quantidade que você deseja comprar."));
let valorUnitario = parseFloat(prompt("digite o valor da unidade do produto solicitado."));
let valorTotal = quantidade * valorUnitario

if (quantidade <= 5) {
    valorTotal = valorTotal - ((2 / 100) * valorTotal)
} else if (quantidade > 5 && quantidade <= 10) {
    valorTotal = valorTotal - ((3 / 100) * valorTotal)
} else {
    valorTotal = valorTotal - ((5 / 100) * valorTotal)
}
alert("O Total a pagar é de: R$" + valorTotal);