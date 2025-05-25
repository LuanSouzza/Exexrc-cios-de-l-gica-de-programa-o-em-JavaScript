let hora = parseInt(prompt("Digite o valor das horas"));
let minuto =  parseInt(prompt("Digite o valor dos minutos"));
let segundo =  parseInt(prompt("Digite o valor dos segundos"));

for (hora; hora > -1; hora--) {
    for (minuto; minuto > -1; minuto--) {
        for (segundo; segundo > -1; segundo--) {
            console.log(hora + ':' + minuto + ':' + segundo)
        }
        segundo = 59
    }
    minuto = 59
}