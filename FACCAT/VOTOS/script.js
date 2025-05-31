alert("votos");

let eleitores = parseFloat(prompt("Digite o número de eleitores do seu município"));
let votosBrancos = parseFloat(prompt("Digite o número de votos brancos do seu município"));
let votosNulos = parseFloat(prompt("Digite o número de votos nulos do seu município"));

let votosValidos = eleitores - (votosBrancos + votosNulos)

let percentualVotosBrancos = votosBrancos / eleitores * 100
let percentualVotosNulos = votosNulos / eleitores * 100
let percentualVotosValidos = votosValidos / eleitores * 100

alert("A porcentagem dos votos nulos é:" + percentualVotosNulos + "% a dos votos brancos é:" + percentualVotosBrancos + "% e a dos votos válidos é: " + percentualVotosValidos + "%");