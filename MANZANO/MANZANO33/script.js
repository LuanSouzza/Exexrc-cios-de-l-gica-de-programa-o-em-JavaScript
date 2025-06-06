alert("Potências de 3");

let base = 3
let potencia = 1
let expoente = 1

while (expoente < 16) {
    console.log("Base: " + base + " Expoente: " + expoente + " Potencia: " + potencia);
    potencia = potencia * base
    expoente = expoente + 1
}