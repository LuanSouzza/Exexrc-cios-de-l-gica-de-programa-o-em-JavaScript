alert("Área de um trapézio.");

let baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio em cm."));
let baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio em cm."));
let altura = parseFloat(prompt("Digite o valor da altura do trapézio em cm."));
let area = ((baseMaior + baseMenor) * altura) / 2

alert("A área do trapézio é de: " + area + "cm²");