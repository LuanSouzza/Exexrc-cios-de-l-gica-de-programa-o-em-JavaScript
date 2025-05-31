alert("Peso ideal");

let nome = String(prompt("Digite seu nome"));
let sexo = String(prompt("Digite 'Homem' ou 'Mulher' dependendo do seu sexo"));
let altura = parseFloat(prompt("digite sua altura"));

switch (sexo) {
   case "Mulher" || "mulher":
      let pesoIdealFeminino = (62.1 * altura) - 44.7
      alert(nome + " seu peso ideal é: " + pesoIdealFeminino);
      break;

   case "Homem" || "homem":
      let pesoIdealMasculino = (72.7 * altura) - 58
      alert(nome + " seu peso ideal é: " + pesoIdealMasculino);
      break;

   default:
      alert("Por favor, reinicie o algoritmo e escreva Homem ou mulher dependendo do seu sexo.");
      break;
}