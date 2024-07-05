let frase = "rato roeu a roupa do rei de roma"
let letra = "r"
let contador = 0
 
for (let i = 0; i < frase.length; i++){
    if (frase.charAt(i) === letra){
        contador++
    }
}

console.log (contador)