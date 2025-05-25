alert("Digite um número, um operador matemático (+, -, * ou /) e outro número ao final exibirei o resultado da operação")

let primeiroNumero = parseFloat(prompt("Por favor digite o 1° número"));
let operador = prompt("Digite um operador matemático (+, -, * ou /)");
let segundoNumero = parseFloat(prompt("Por favor digite o 2° número"));


switch (operador) {
    case '+':
        let total = primeiroNumero + segundoNumero
        alert(primeiroNumero + ' + ' + segundoNumero + ' = ' + total);
        break;
    case '-':
        let diferenca = primeiroNumero - segundoNumero
        alert(primeiroNumero + ' - ' + segundoNumero + ' = ' + diferenca);
        break;
    case '*':
        let produto = primeiroNumero * segundoNumero
        alert(primeiroNumero + ' * ' + segundoNumero + ' = ' + produto);
        break;
    case '/':
        let quociente = primeiroNumero / segundoNumero
        alert(primeiroNumero + ' / ' + segundoNumero + ' = ' + quociente);
        break;
    default:
        alert("Não existe operação correspondente para esse caractere");
        break;
}