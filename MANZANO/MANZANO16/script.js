alert("Apuração das eleições");

let candidatoA = parseFloat(prompt("Digite a quantidade de votos válidos obtidos pelo candidato A"));
let candidatoB = parseFloat(prompt("Digite a quantidade de votos válidos obtidos pelo candidato B"));
let candidatoC = parseFloat(prompt("Digite a quantidade de votos válidos obtidos pelo candidato C"));
let votosNulos = parseFloat(prompt("Digite a quantidade de votos nulos"));
let votosBrancos = parseFloat(prompt("Digite a quantidade de votos brancos"));

let totalValidos = candidatoA + candidatoB + candidatoC
let totalEleitores = totalValidos + votosNulos + votosBrancos
let percentualTotalValidos = (totalValidos * 100) / totalEleitores
let percentualCandidatoA = (candidatoA * 100) / totalEleitores
let percentualCandidatoB = (candidatoB * 100) / totalEleitores
let percentualCandidatoC = (candidatoC * 100) / totalEleitores
let percentualVotosNulos = (votosNulos * 100) / totalEleitores
let percentualVotosBrancos = (votosBrancos * 100) / totalEleitores

alert("O número total de eleitores foram de: " + totalEleitores + "\nO percentual de votos válidos totais foram de: " + percentualTotalValidos + "%");

alert("O percentual de votos válidos do candidato A foram de: " + percentualCandidatoA + "%" + "\nO percentual de votos válidos do candidato B foram de: " + percentualCandidatoB + "%" + "\nO percentual de votos válidos do candidato C foram de: " + percentualCandidatoC + "%");

alert("O percentual de votos nulos foram de: " + percentualVotosNulos + "%" + "\nO percentual de votos brancos foram de: " + percentualVotosBrancos + "%");