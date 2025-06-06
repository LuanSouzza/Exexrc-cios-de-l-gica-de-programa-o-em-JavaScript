alert("Cálculo de viagem");
let tempoGasto = parseFloat(prompt("Digite o tempo gasto na viagem."));
let velocidade = parseFloat(prompt("Digite a velocidade média do carro durante a viagem."));

let distancia = tempoGasto * velocidade
let litrosUsados = distancia / 12

alert("Tempo gasto: " + tempoGasto + " Horas\nVelocidade média: " + velocidade + " Km/h\nDistância pecorrida: " + distancia + " Km\nLitros gastos: " + litrosUsados + " L");