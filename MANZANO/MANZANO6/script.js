alert("Troca de valores");

let variavelA = parseInt(prompt("Digite um valor para a variável A"));
let variavelB = parseInt(prompt("Digite um valor para a variável B"));

let containerA = variavelA
let containerB = variavelB
variavelA = containerB
variavelB = containerA

alert("O valor da variável A é de: "+ variavelA+ " e o da variável B é de: "+ variavelB);