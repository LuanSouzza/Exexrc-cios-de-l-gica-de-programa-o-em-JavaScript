alert("Digite um número de 0 a 100 e eu informarei e letra correspondente a sua nota");

let nota = parseInt(prompt("Digite o número"));

if (nota <= 20) {
    alert("Sua nota é F");
} else if (nota <= 40) {
    alert("Sua nota é D");
} else if (nota <= 60) {
    alert("Sua nota é C")
} else if (nota <= 80) {
    alert("Sua nota é B")
} else if (nota <= 100) {
    alert ("Sua nota é A")
}else{
    alert("Não existe nota correspondente para esse número")
}