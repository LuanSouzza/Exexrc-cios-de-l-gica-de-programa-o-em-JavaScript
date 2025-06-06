alert("Conversor de temperatura");

let grausCelsius = 10
let grausFarenheit = 0


while (grausCelsius < 101) {
    grausFarenheit = (9 * grausCelsius + 160) / 5
    console.log("A conversão de: " + grausCelsius + "°C em Fahrenheit é de: " + grausFarenheit + "°F.");
    grausCelsius = grausCelsius + 10
}