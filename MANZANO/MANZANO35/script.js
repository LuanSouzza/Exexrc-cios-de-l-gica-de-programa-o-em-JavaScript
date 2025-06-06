alert("Fibonacci");

let caixa1 = 0
let caixa2 = 1
let fibonacci = 1
let contadora = 1

console.log("Fibonacci = " + fibonacci);
while (contadora < 16) {
    console.log("Fibonacci = " + fibonacci);
    fibonacci = caixa1 + caixa2
    caixa1 = caixa2
    caixa2 = fibonacci

    contadora = contadora + 1
}