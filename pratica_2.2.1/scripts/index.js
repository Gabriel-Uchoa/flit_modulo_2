const inputName = document.getElementById('name');
const inputAdress = document.getElementById('adress');
const inputHourOpen = document.getElementById('hourOpen');
const inputHourClosed = document.getElementById('hourClosed');
const cliclSubmit = document.getElementById('submit');
var checkboxes = document.querySelectorAll('[name=diasSemanaOn]');

function handleChangeInput(event) {
    window.localStorage.setItem(event.target.id, event.target.value)
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("Preparando envio...")
}

function getValuesCheckbox() {
    var diasSemanaOn = document.querySelectorAll('[name=diasSemanaOn]:checked');
    var values = [];

    for (var i = 0; i < diasSemanaOn.length; i++) {

        values.push(diasSemanaOn[i].value);
    }
    window.localStorage.setItem('diasSemanaOn', JSON.stringify(values))
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', getValuesCheckbox, false);
}

function getValuesLocalStorage() {
    if (window.localStorage.getItem("name")) {
        inputName.value = window.localStorage.getItem("name")
    }
    if (window.localStorage.getItem("adress")) {
        inputAdress.value = window.localStorage.getItem("adress")
    }

    if (window.localStorage.getItem("diasSemanaOn")) {
        dias = JSON.parse(window.localStorage.getItem("diasSemanaOn"))
        for (var i = 0; i < dias.length; i++) {
            const checkbox = document.querySelector(`[value="${dias[i]}"]`);
            checkbox.checked = true
        }
    }

    if (window.localStorage.getItem("hourOpen")) {
        inputHourOpen.value = window.localStorage.getItem("hourOpen")
    }
    if (window.localStorage.getItem("hourClosed")) {
        inputHourClosed.value = window.localStorage.getItem("hourClosed")
    }
}

getValuesLocalStorage()

inputName.addEventListener("change", handleChangeInput);
inputAdress.addEventListener("change", handleChangeInput);
inputHourOpen.addEventListener("change", handleChangeInput);
inputHourClosed.addEventListener("change", handleChangeInput);
cliclSubmit.addEventListener("click", handleSubmit);

