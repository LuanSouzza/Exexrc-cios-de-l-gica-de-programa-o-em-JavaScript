alert("Bem-vindo ao hortifruti do jaja");
let fruta = String(prompt("Digite Morango para comprar morangos ou maçã para comprar maçãs."));

switch (fruta) {
   case "Morango" || "Morangos" || "morango" || "morangos":
      let kgMorango = parseFloat(prompt("Digite quantos quilos de morango você deseja."));
      if (kgMorango <= 5) {
         let precoMorango = 2.50
         let precoFinalMorango = precoMorango * kgMorango

         if (precoFinalMorango > 25.00 || kgMorango > 8) {
            precoFinalMorango = precoFinalMorango - (10 / 100 * precoFinalMorango)
         }
         alert("O valor total de sua compra de morangos foi: R$" + precoFinalMorango);
      } else {
         let precoMorango = 2.20
         let precoFinalMorango = precoMorango * kgMorango

         if (precoFinalMorango > 25.00 || kgMorango > 8) {
            precoFinalMorango = precoFinalMorango - (10 / 100 * precoFinalMorango)
         }
      }
      alert("O valor total de sua compra de morangos foi: R$" + precoFinalMorango);
      break;
   case "Maçã" || "Maçãs" || "maçã" || "maçãs":
      let kgMaca = parseFloat(prompt("Digite quantos quilos de maçã você deseja."));
      if (kgMaca <= 5) {
         let precoMaca = 1.80
         let precoFinalMaca = precoMaca * kgMaca

         if (precoFinalMaca > 25.00 || kgMaca > 8) {
            precoFinalMaca = precoFinalMaca - (10 / 100 * precoFinalMaca)
         }
         alert("O valor total de sua compra de maçã foi: R$" + precoFinalMaca);
      } else {
         let precoMaca = 1.50
         let precoFinalMaca = precoMaca * kgMaca

         if (precoFinalMaca > 25.00 || kgMaca > 8) {
            precoFinalMaca = precoFinalMaca - (10 / 100 * precoFinalMaca)
         }
      }
      alert("O valor total de sua compra de maçã foi: R$" + precoFinalMaca);
      break;
   default:
      alert("esta fruta não está disponivel");
}