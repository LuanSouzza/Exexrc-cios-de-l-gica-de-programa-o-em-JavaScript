alert("Salário");

let salarioAtual = parseFloat(prompt("Digite o valor do seu sálario"));
let ajuste = parseFloat(prompt("Digite o valor do percentual do ajuste do seu aumento"));
let novoSalario = ajuste / 100 * salarioAtual + salarioAtual

alert("Seu novo salário é:" + novoSalario);