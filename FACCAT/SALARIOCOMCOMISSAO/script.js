alert("salariocomcomissao");

let salario = parseFloat(prompt("Digite seu salário"));
let vendas = parseFloat(prompt("Digite o valor total das suas vendas efetuadas"));

if (vendas < 1501.00) {
    let salarioFinal = salario + ((3 / 100) * vendas)
    alert("Seu salário junto as comissões é: R$" + salarioFinal);
} else {
    let salarioFinal = salario + ((8 / 100) * vendas)
    alert("Seu salário junto as comissões é: R$" + salarioFinal);
}