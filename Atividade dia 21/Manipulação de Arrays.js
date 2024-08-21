let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log("Array após adicionar 60:", numeros);

let valorRemovido = numeros.pop();
console.log("Valor removido:", valorRemovido);
console.log("Array após remover o último valor:", numeros);

numeros.splice(2, 1); 
console.log("Array após remover o terceiro elemento:", numeros);

numeros.sort((a, b) => b - a);
console.log("Array em ordem decrescente:", numeros);
