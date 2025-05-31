alert("idade dos homens e mulheres");

let homem1 = parseInt(prompt("Digite a idade de um homem"));
let homem2 = parseInt(prompt("Digite a idade de outro homem"));
let mulher1 = parseInt(prompt("Digite a idade de uma mulher"));
let mulher2 = parseInt(prompt("Digite a idade de outra mulher"));

if (homem1 > homem2 && mulher1 > mulher2) {
    let soma = homem1 + mulher2
    let produto = homem2 * mulher1
    alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma + " e o produto da multiplicação das idades do homem mais novo com a mulher mais velha é: " + produto);
} else if (homem1 < homem2 && mulher1 < mulher2) {
    let soma = homem2 + mulher1
    let produto = homem1 * mulher2
    alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma + " e o produto da multiplicação das idades do homem mais novo com a mulher mais velha é: " + produto);
} else if (homem1 < homem2 && mulher1 > mulher2) {
    let soma = homem2 + mulher2
    let produto = homem1 * mulher1
    alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma + " e o produto da multiplicação das idades do homem mais novo com a mulher mais velha é: " + produto);
} else if (homem1 > homem2 && mulher1 < mulher2) {
    let soma = homem1 + mulher1
    let produto = homem2 * mulher2
    alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma + " e o produto da multiplicação das idades do homem mais novo com a mulher mais velha é: " + produto);
}