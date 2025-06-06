alert("Manzano 61");

let fatorial = 1
let numeroImpar = 0

for (let contadora = 1; contadora < 10; contadora++) {
   fatorial = 1
   for (numeroImpar = 1; numeroImpar < contadora; numeroImpar++) {
      fatorial = fatorial * numeroImpar
   }
   if (contadora % 2 != 0) {
      console.log("O fatorial de " + numeroImpar + " é " + fatorial);
   }
}