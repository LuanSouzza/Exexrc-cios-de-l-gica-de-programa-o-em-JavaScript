alert("Álcool ou Gasolina");
let combustivel = prompt("Digite A para abastecer com álcool ou G para gasolina");

if (combustivel == "A") {
    let litro = parseFloat(prompt("Digite quantos litros de álcool você irá abastecer"));
    if (litro <= 20) {
        let preco = (2.90 - 3 / 100) * litro
        alert("O valor a pagar é de: R$" + preco);
    } else {
        let preco = (2.90 - 5 / 100) * litro
        alert("O valor a pagar é de: R$" + preco);
    }
} else if (combustivel == "G") {
    let litro = parseFloat(prompt("Digite quantos litros de gasolina você irá abastecer"));
    if (litro <= 20) {
        let preco = (3.30 - 3 / 100) * litro
        alert("O valor a pagar é de: R$" + preco);
    } else {
        let preco = (2.30 - 5 / 100) * litro
        alert("O valor a pagar é de: R$" + preco);
    }
} else if (combustivel !== "A" && "G") {
    alert("Opção inválida")
}