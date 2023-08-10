const teclado = document.querySelectorAll('input[type=button]')
const display = document.querySelector('input[type=number]')

for (let i = 0; i < teclado.length; i++) {
    const teclas = teclado[i]
    
    teclas.addEventListener('click', () => {
    display.value = display.value + teclas.value
    })
}

function soma() {
    var valor = display.value
    console.log(valor)

}

function subtração () {

}

function divisão () {

}

function multiplicação () {

}

function resultado(valor) {
    var valor2 = display.value

    console.log(valor2)

}