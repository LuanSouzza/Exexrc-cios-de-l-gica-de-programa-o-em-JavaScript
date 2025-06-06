alert("Manzano 60");

let grausCelsius = 10
let grausFarenheit = 0

for (let contadora = 1; contadora < 11; contadora++) {
   grausFarenheit = ((9 * grausCelsius) + 160) / 5
   console.log(grausCelsius + "°C é igual a : " + grausFarenheit + "°F");
   grausCelsius = grausCelsius + 10
}