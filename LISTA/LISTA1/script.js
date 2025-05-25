let hora = 1
let minuto = 59
let segundo = 59


for (hora; hora > -1; hora--) {
    for (minuto; minuto > -1; minuto--) {
        for (segundo; segundo > -1; segundo--) {
            console.log(hora + ':' + minuto + ':' + segundo)
        }
        segundo = 59
    }
    minuto = 59
}