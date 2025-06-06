alert("Potenciação");

let base = parseInt(prompt("Digite o valor da base"));
let contadora = parseInt(prompt("Digite o valor do expoente"));
let potencia = 1
let expoente = 1

while (expoente < contadora + 1) {
    console.log("Base: " + base + " Expoente: " + expoente + " Potencia: " + potencia);
    potencia = potencia * base
    expoente = expoente + 1
}