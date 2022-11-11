console.log("Desafio 01")
function confirmarDados(nome) {
    var nomeCompleto = nome + ' da silva'

    function getAnoNascimento() {
        var idade = 20
        var ano = 2022 - idade
        return {
            idade, ano
        }
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento().ano}, ${getAnoNascimento().idade}`)
}

confirmarDados('Marcos')

console.log('')
