alert("Manzano 57");

let base = 3
let potencia = 1
let expoente = 0

console.log("Base: " + base + " expoente: " + expoente + " potencia: " + potencia);

for (let expoente = 1; expoente < 15; expoente++) {
   console.log("Base: " + base, " expoente: " + expoente + " potencia: " + potencia);
   potencia = potencia * base
}