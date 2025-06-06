alert("Manzano 58");

let potencia = 1

let base = parseInt(prompt("Digite o valor da base"));
let expoente = parseInt(prompt("Digite o valor do expoente"));

for (let contadora = 0; contadora < expoente + 1; contadora++) {
   console.log("Base:" + base + " expoente:" + contadora + " potencia:" + potencia);
   potencia = potencia * base
}