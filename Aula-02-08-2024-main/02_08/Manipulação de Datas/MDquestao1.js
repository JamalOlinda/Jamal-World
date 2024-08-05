const primeiroDiaDoAno = new Date();
primeiroDiaDoAno.setMonth(0); // Janeiro (0)
primeiroDiaDoAno.setDate(1); // Dia 1

console.log("Primeiro dia do ano:", primeiroDiaDoAno.toDateString());
const diaDeHoje = new Date();
console.log("Dia de hoje:", diaDeHoje.toDateString());
const diferencaEmMilissegundos = diaDeHoje - primeiroDiaDoAno;
const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

console.log("Diferença em dias:", diferencaEmDias);
const dia = diaDeHoje.getDate();
const mes = diaDeHoje.getMonth() + 1; // Adicionamos 1, pois janeiro é 0
const ano = diaDeHoje.getFullYear();

const dataFormatada = `${dia}/${mes}/${ano}`;
console.log("Data formatada:", dataFormatada);