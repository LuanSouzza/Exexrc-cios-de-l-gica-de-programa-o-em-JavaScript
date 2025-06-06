alert("Manzano 59");

let fibonacci = 1
let anterior = 0

console.log("Fibonacci = " + fibonacci);
for (let contadora = 1; contadora < 15; contadora++) {
   fibonacci = fibonacci + anterior
   console.log("Fibonacci = " + fibonacci);
   anterior = fibonacci - anterior
}