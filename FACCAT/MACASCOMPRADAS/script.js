alert("macasCompradas");

let macasCompradas = parseFloat(prompt("Digite o número de maçãs que foram compradas"));

if (macasCompradas < 12) {
    let totalCompra = macasCompradas * 1.3
    alert("O total da sua compra è de: R$" + totalCompra)
} else {
    let totalCompra = macasCompradas
    alert("O total da sua compra è de: R$" + totalCompra)
}