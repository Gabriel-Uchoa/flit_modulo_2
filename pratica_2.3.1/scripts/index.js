const forms = document.getElementById("forms")
const buttonVertical = document.getElementById('vertical')
const buttonHorizontal = document.getElementById('horizontal')
const buttonInicio = document.getElementById('ali_inicio')
const buttonFim = document.getElementById('ali_final')
const buttonFlex = document.getElementById('flex')
const buttonGrid = document.getElementById('grid')
const inputForms = document.getElementsByClassName('inputs')

function changeFlexDirection(e) {
    forms.style.flexDirection = e.target.value;
}
function changeAlignDirection(e) {
    forms.style.alignItems = e.target.value;
}

function changeDisplay(e) {
    forms.style.display = e.target.value;

    if (e.target.value === "grid") {
        buttonVertical.style.display = "none";
        buttonHorizontal.style.display = "none";
        propsGrid()
    } else {
        buttonVertical.style.display = "block";
        buttonHorizontal.style.display = "block";
    }
}

function propsGrid() {
    for (let i = 0; i < inputForms.length; i++) {
        document.getElementById(inputForms[i].id).style.gridArea = inputForms[i].id
    }
    forms.style.gridTemplateAreas = "'item1 item1 item2' 'item4 item5 item2' 'item3 item3 item3'";
    forms.style.gap = "25px";

}

buttonVertical.addEventListener('click', changeFlexDirection)
buttonHorizontal.addEventListener('click', changeFlexDirection)

buttonInicio.addEventListener('click', changeAlignDirection)
buttonFim.addEventListener('click', changeAlignDirection)

buttonFlex.addEventListener('click', changeDisplay)
buttonGrid.addEventListener('click', changeDisplay)



