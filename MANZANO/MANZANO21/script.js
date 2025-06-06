alert("Equação de 2° Grau");

let a = parseFloat(prompt("Digite o valor de A"));
let b = parseFloat(prompt("Digite o valor de B"));
let c = parseFloat(prompt("Digite o valor de C"));

let delta = b ^ 2 - 4 * a * c

if (delta > 0) {
    let x1 = (-b + delta ^ (1 / 2)) / (2 * a)
    let x2 = (-b - delta ^ (1 / 2)) / (2 * a)
    alert("A equação possui duas raízes reais, sendo x1 = " + x1 + " e x2 = " + x2);
} else if (delta = 0) {
    let x1 = -b / (2 * a)
    alert("A equação possui uma raiz real, sendo x1 = " + x1);
} else {
    alert("A equação não possui raízes reais");
}