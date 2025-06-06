alert("Manzano 48");

let nome = String();
let largura = 0
let comprimento = 0
let area = 0
let areaTotal = 0
let opcao = String();

do {
    nome = String(prompt("Digite o nome do cômodo: "));
    largura = parseInt(prompt("Digite a largura do cômodo em metros: "));
    comprimento = parseInt(prompt("Digite o comprimento do cômodo em metros: "));


    area = largura * comprimento
    console.log("A área do " + nome + " é de: " + area + " M²");

    areaTotal = areaTotal + area

    opcao = String(prompt("Deseja continuar calculando a área dos cômodos? se sim digite S se não digite N."));
} while (opcao == "S");

console.log("A área total de todos os cômodos é: " + areaTotal + " M²");