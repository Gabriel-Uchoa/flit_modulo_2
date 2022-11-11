console.log("Desafio 02")

function confirmarDados(nome) {
    var nomeCompleto = nome + ' da silva'
    var geracao = 'millenium'

    function getAnoNascimento() {
        var idade = 40
        var ano = 2022 - idade
        return {
            idade, ano
        }
    }

    var anoDeNascimento = getAnoNascimento().ano;

    if (anoDeNascimento <= 1995) {
        geracao = 'Geração X'
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento().ano}, ${geracao}`)
}

confirmarDados('Marcos')
console.log()
