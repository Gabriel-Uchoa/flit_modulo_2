
function verifyPrompt() {
    var number = parseInt(prompt("Informe o salario base: "));
    const isNumber = (number) => !isNaN(number)
    return isNumber(number) ? reajuste(number) : new Error("Error: Digite Apenas números!");
}

function reajuste(salario) {

    function calcularReajuste(salarioCalcular, porcentagem) {
        switch (porcentagem) {
            case 20:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular

            case 15:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular

            case 10:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular

            case 5:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular
        }
    }


    var salarioNovo = (salario <= 1500) ? calcularReajuste(salario, 20)
        : salarioNovo = (salario > 1500) && (salario <= 2000) ? calcularReajuste(salario, 15)
            : salarioNovo = (salario > 2000) && (salario <= 3000) ? calcularReajuste(salario, 10)
                : salarioNovo = (salario > 3000) ? calcularReajuste(salario, 5) : salario
                
    return console.log(salarioNovo)
}

try {
    verifyPrompt()
} catch (error) {
    console.log(error.message)
}

