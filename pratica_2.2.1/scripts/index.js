const inputName = document.getElementById('name');
const inputAdress = document.getElementById('adress');
const inputHourOpen = document.getElementById('hourOpen');
const inputHourClosed = document.getElementById('hourClosed');
const cliclSubmit = document.getElementById('submit');
var checkboxes = document.querySelectorAll('[name=diasSemanaOn]');


function handleChangeName(event) {
    console.log('Nome da Empresa: ', event.target.value)
}
function handleChangeAdress(event) {
    console.log('Endereço da Empresa: ', event.target.value)
}
function handleChangeHourOpen(event) {
    console.log('Hora de Abertura: ', event.target.value)
}
function handleChangeHourClosed(event) {
    console.log('Hora de Fechamento: ', event.target.value)
}
function handleSubmit(event) {
    event.preventDefault();
    console.log("Preparando envio...")
}


function getValues() {
    var diasSemanaOn = document.querySelectorAll('[name=diasSemanaOn]:checked');
    var values = [];
    for (var i = 0; i < diasSemanaOn.length; i++) {
        values.push(diasSemanaOn[i].value);
    }
    console.log("Dias Abertos: ", values)
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', getValues, false);
}

inputName.addEventListener("change", handleChangeName);
inputAdress.addEventListener("change", handleChangeAdress);
inputHourOpen.addEventListener("change", handleChangeHourOpen);
inputHourClosed.addEventListener("change", handleChangeHourClosed);
cliclSubmit.addEventListener("click", handleSubmit);

