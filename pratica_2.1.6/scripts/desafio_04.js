console.log("Desafio 04")

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

    var geracao = geracaoPertence(getAnoNascimento().ano)

    function geracaoPertence(ano) {
        if (ano <= 1995) {
            geracao = 'Geração X'
            return geracao
        }
        return geracao
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento().ano}, ${geracao}`)
}

confirmarDados('Marcos')
console.log('')
