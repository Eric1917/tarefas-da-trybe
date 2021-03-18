
let states = document.getElementById('estado');
function mkStates() {
    const currentState = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
    //let value = 1
    for (let index = 0; index < currentState.length; index += 1) {
        const mkoptions = document.createElement('option');
        states.appendChild(mkoptions).innerText = currentState[index];
        states.appendChild(mkoptions).value = currentState[index]
    }
}
window.onload = function () {
    mkStates();
}
