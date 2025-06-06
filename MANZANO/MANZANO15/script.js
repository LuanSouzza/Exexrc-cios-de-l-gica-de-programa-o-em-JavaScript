alert("Reajuste salarial");

let salario = parseFloat(prompt("Digite seu salário"));
let percentual = parseFloat(prompt("Digite o valor da porcentagem do seu reajuste"));

let novoSalario = salario + (percentual / 100 * salario)

alert("Seu novo salário é de:" + novoSalario);