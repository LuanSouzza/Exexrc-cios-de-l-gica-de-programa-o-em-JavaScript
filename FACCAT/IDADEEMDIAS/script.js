let anos = parseInt(prompt("Insira sua idade em anos"));
let meses = parseInt(prompt("Insira quantos meses inteiros se passaram desde seu ultimo aniversário"));
let dias = parseInt(prompt("Insira quantos dias faltam para o seu próximo mesversário"));

let idade = anos * 365 + meses * 30 + 30 - dias
alert("Sua idade em dias é:" + idade);