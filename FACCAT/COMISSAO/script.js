let salarioFixo = parseFloat(prompt("Digite seu salário fixo"));
let carrosVendidos = parseInt(prompt("Digite a quantidade de carros que você vendeu"));
let comissao = parseFloat(prompt("Digite o valor da sua comissao por carros vendidos"));
let totalEmVendas = parseFloat(prompt("Digite o valor total de suas vendas"));

let salarioFinal = salarioFixo + (comissao * carrosVendidos) + (5 / 100 * totalEmVendas)
alert("Seu salário é de: R$" + salarioFinal)