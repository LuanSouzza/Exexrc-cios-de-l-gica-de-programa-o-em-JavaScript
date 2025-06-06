let opcao = String();
let areaTotal = 0

while (opcao !== "N") {
    let nome = String(prompt("Digite o nome do cômodo: "));
    let largura = parseInt(prompt("Digite a largura do cômodo em metros: "));
    let comprimento = parseInt(prompt("Digite o comprimento do cômodo em metros: "));

    let area = largura * comprimento
    areaTotal = areaTotal + area

    opcao = String(prompt("Quer calcular a área de outro cômodo? Digite S para sim ou N para não."));
}

alert("A área total de todos cômodos inseridos é de: " + areaTotal + " m².");