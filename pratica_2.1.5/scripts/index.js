function receberSenhaEmail() {
    var email = prompt("Infome um email:")
    var senha = prompt("Infome uma senha:")

    console.log('')
    console.log(`Email informado: ${email}`)
    console.log(`Senha informada: ${senha}`)
    console.log('')

    console.log(compararVariaveis(email, senha))
}

function compararVariaveis(email, senha) {
    var confereEmail = prompt("Repita o email informado:")
    var confereSenha = prompt("Repita a senha informada:")

    if ((email === confereEmail) && (senha === confereSenha)) {
        return true
    } else {
        return false
    }
}

receberSenhaEmail()