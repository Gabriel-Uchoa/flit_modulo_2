var checkboxes = document.getElementsByClassName('level');
var stars = document.getElementsByClassName('star');
var radios = document.querySelectorAll('[name=nota]');

const star_checked = "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"
const star_unChecked = "https://cdn-icons-png.flaticon.com/512/126/126482.png"

var anterior = 1

function checked(nivel) {
    for (let i = 0; i < nivel; i++) {
        var star = document.getElementById(stars[i].id)
        star.src = star_checked
    }
}

function unChecked(nivel) {
    var star = document.getElementById(stars[nivel].id)
    star.src = star_unChecked
}

function getValuesCheckbox() {
    var check = document.querySelectorAll('[type=checkbox]:checked');
    var valuesCheck = [];
    for (var i = 0; i < check.length; i++) {
        valuesCheck.push(check[i].value);
    }
    console.log("Estrelas selecionadas: ", valuesCheck.length)
    checked(valuesCheck.length)
    unChecked(valuesCheck.length)
}

function getValuesRadios() {
    var radio = document.querySelectorAll('[type=radio]:checked');
    var valuesRadio = [];
    for (var i = 0; i < radio.length; i++) {
        valuesRadio.push(radio[i].value);
    }
    console.log("Nota Atribuida: ", valuesRadio)
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', getValuesCheckbox);
}

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', getValuesRadios);
}