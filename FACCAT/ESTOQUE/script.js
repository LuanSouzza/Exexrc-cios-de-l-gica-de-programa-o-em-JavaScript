alert("Estoque");

let produto = String(prompt("Digite o nome do produto."));
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima de " + produto + " que podem ser armazenados em seu estoque."));
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima de " + produto + " que podem ser armazenados em seu estoque."));
let quantidadeAtual = parseFloat(prompt("Digite a quantidade de " + produto + " que está atualmente armazenado em seu estoque."));

let mediaArmazenamento = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtual >= mediaArmazenamento) {
    alert("Efetue a compra");
} else {
    alert("Nãõ efetue a compra");
}