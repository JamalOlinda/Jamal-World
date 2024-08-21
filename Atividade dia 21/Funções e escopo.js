function soma(a, b) {
    return a + b;
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function dobraValores(array) {
    return array.map(valor => valor * 2);
}

function contaCaracteres(string) {
    return string.length;
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}
