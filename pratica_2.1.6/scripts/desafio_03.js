console.log("Desafio 03")
function confirmarDados(nome) {
    var nomeCompleto = nome + ' da silva'

    function getAnoNascimento() {
        var idade = 20
        var ano = 2022 - idade
        return ano
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento()}, ${idade}`)
}

try {
    confirmarDados('Marcos')
} catch (error) {
    new Error(console.log("Um erro foi encontrado e não foi possivel concluir a operação."));
}

console.log('')



