function calcularSomaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

const numeros = [1, 1, 1, 1, 1]
const resultado = calcularSomaArray(numeros);
console.log(resultado)