function numeroaleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = numeroaleatorio(1, 100)


console.log (numero)