const pessoa = {
    nome: "João",
    peso: 190,
    altura: 1.90
};
function calcularIMC(pessoa) {
    const { peso, altura } = pessoa;
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
const imc = calcularIMC(pessoa);
const classificacao = classificarIMC(imc);

console.log(`Nome: ${pessoa.nome}`);
console.log(`Peso: ${pessoa.peso} kg`);
console.log(`Altura: ${pessoa.altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);