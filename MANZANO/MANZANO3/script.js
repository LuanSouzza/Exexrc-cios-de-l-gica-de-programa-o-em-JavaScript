alert("Calculadora do volume de objetos cilíndricos");

let altura = parseFloat(prompt("Digite o valor da altura em cm."));
let raio = parseFloat(prompt("Digite o valor do raio em cm."));

let volume = 3.14 * (raio * raio) * altura

alert("O volume da lata de óleo é de:" + volume + "cm³");