/** Etapa 01 */
console.log(`Desafio: Somar números de uma lista`)

const lista = [12, 6, 9, 42, 11, 102, 44, 15]

var resultSomaFor = 0
var resultSomaWhile = 0
var resultSomaDoWhile = 0
var contadorWhile = 0
var contadorDoWhile = 0

for (var i = 0; i < lista.length; i++) {
    resultSomaFor = resultSomaFor + lista[i];
}

while (contadorWhile < lista.length) {
    resultSomaWhile = resultSomaWhile + lista[contadorWhile]
    contadorWhile++
}

do {
    resultSomaDoWhile = resultSomaDoWhile + lista[contadorDoWhile]
    contadorDoWhile++
} while (contadorDoWhile < lista.length);

console.log("Usando For: " + resultSomaFor)
console.log("Usando While: " + resultSomaWhile)
console.log("Usando Do While: " + resultSomaDoWhile)
console.log('')

/** Etapa 02 */
var numInicial = 84
var numFinal = 90

console.log(`Desafio: Parar no 1° número primo entre um intervalo de números`)

while (numInicial < numFinal) {

    if (numInicial % 2 == 0) {
    } else {
        if (numInicial % 3 == 0) {
        } else {
            if (numInicial % 5 == 0) {
            } else {
                break
            }
        }
    }

    console.log(numInicial)
    numInicial++
}

console.log('')

/** Etapa 03 */

range = 100
console.log(`Desafio: Logar números menores de 40 e maiores de 50`)

for (let i = 0; i < range; i++) {
    if (i >= 40 && i <= 50) {
        continue
    }
    console.log(i)
}