alert("Conversor monetário USD/BRL");

let cotacao = parseFloat(prompt("Digite a atual cotação do Dólar frente ao Real."));
let reais = parseFloat(prompt("Digite quantos reais você tem."));

let dolares = reais / cotacao

alert("A coversão dos seus reais em dolares são de: US$" + dolares);