let num1 = 200.456;
let num2 = 150.789;

let num1Arredondado = Math.round(num1);
console.log("num1 arredondado:", num1Arredondado);

let valorMaximo = Math.max(num1, num2);
let valorMinimo = Math.min(num1, num2);
console.log("Valor máximo:", valorMaximo);
console.log("Valor mínimo:", valorMinimo);

let raizQuadradaNum2 = Math.sqrt(num2);
console.log("Raiz quadrada de num2:", raizQuadradaNum2);

let num1NotacaoCientifica = num1.toExponential();
console.log("num1 em notação científica:", num1NotacaoCientifica);
