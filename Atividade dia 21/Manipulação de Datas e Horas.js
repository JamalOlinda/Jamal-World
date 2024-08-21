let aniversario = new Date('2024-12-25'); 

let dataAtual = new Date();

let diferencaEmMilissegundos = aniversario - dataAtual;
let diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
console.log(`Faltam ${diferencaEmDias} dias para o seu próximo aniversário.`);

let dataFormatada = dataAtual.toISOString().split('T')[0];
console.log(`Data atual formatada: ${dataFormatada}`);

let novaData = new Date(dataAtual);
novaData.setDate(novaData.getDate() + 30);
let novaDataFormatada = novaData.toISOString().split('T')[0];
console.log(`Data atual + 30 dias: ${novaDataFormatada}`);
