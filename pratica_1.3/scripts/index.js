//Desafio 01

var caminhada
var corrida
var horaQueAcordei
var termineiTrabalho = true
var tenhoCompromisso

if (caminhada == 5 && corrida == 2) {
    console.log("Passo o dia Bem")
}

if (horaQueAcordei <= 8) {
    console.log("Saio Tranquilo")
}

if (!termineiTrabalho || tenhoCompromisso) {
    console.log('Saio Tarde')
}

//Desafio 02
var num = 6

switch (num) {
    case 2:
        console.log(num + ": é primo")
        break;

    case 3:
        console.log(num + ": é primo")
        break;

    case 5:
        console.log(num + ": é primo")
        break;

    default:
        num % 2 === 0
            ?
            console.log(num + ": não é primo")
            :
            num % 3 === 0
                ?
                console.log(num + ": não é primo")
                :
                num % 5 === 0
                    ?
                    console.log(num + ": não é primo")
                    :
                    console.log(num + ": é primo")
        break;
}

var hora = 1
var minutos = 0
var result = hora > 0 ? minutos = hora * 60 : minutos = 60
console.log(result)