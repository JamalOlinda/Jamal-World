function contarPalavrasUnicas(frase) {
    const palavras = frase.toLowerCase().match(/\b\w+\b/g);
    const palavrasUnicas = new Set(palavras);
    return palavrasUnicas.size;
}

let frase = "Vitor gay gay"
const numPalavrasUnicas = contarPalavrasUnicas(frase);
console.log(numPalavrasUnicas)