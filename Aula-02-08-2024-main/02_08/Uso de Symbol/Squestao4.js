const chave1 = Symbol("descrição da chave");

const chave2 = Symbol("descrição da chave");

console.log("chave1 é igual a chave2?", chave1 === chave2);

let objeto = {
    item: [chave1],
    item2: [chave2]
}

console.log(objeto);