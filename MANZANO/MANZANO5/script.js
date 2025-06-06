alert("Cálculo da prestação");

let valor = parseFloat(prompt("Digite o valor da sua prestação em atraso."));
let taxa = parseFloat(prompt("Digite o valor da taxa."));
let atraso = parseFloat(prompt("Digite o tempo de atraso da fatura em dias"));

let prestacao = valor + (valor * (taxa / 100) * atraso)

alert("O valor da prestação é de: " + prestacao);