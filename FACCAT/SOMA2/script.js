alert("Soma 2");

let numero1 = parseInt(prompt("Digite o 1° número"));
let numero2 = parseInt(prompt("Digite o 2° número"));
let numero3 = parseInt(prompt("Digite o 3° número"));

if (numero1 > numero2 && numero2 > numero3) {
    let soma = numero1 + numero2
    alert("O resultado da soma dos números" + numero1 + " e " + numero2 + " é:" + soma);
} else if (numero2 > numero1 && numero1 > numero3) {
    let soma = numero2 + numero1
    alert("O resultado da soma dos números" + numero2 + " e " + numero1 + " é:" + soma);
} else if (numero3 > numero2 && numero2 > numero1) {
    let soma = numero3 + numero2
    alert("O resultado da soma dos números" + numero3 + " e " + numero2 + " é:" + soma);
} else if (numero2 > numero3 && numero3 > numero1) {
    let soma = numero2 + numero3
    alert("O resultado da soma dos números" + numero2 + " e " + numero3 + " é:" + soma);
} else if (numero3 > numero1 && numero1 > numero2) {
    let soma = numero3 + numero1
    alert("O resultado da soma dos números" + numero3 + " e" + numero1 + " é:" + soma);
} else if (numero1 > numero3 && numero3 > numero2) {
    let soma = numero1 + numero3
    alert("O resultado da soma dos números" + numero1 + " e" + numero3 + " é:" + soma);
}