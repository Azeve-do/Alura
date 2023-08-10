const teclado = document.querySelectorAll('.operacao')
const display = document.querySelector('input[type=number]')
const limpar = document.querySelector('#clear')

var valor1 = ''
var operacaoSelecionada = ''

for (let i = 0; i < teclado.length; i++) {
    const teclas = teclado[i]
    
    teclas.addEventListener('click', () => {
        if(teclas.value === '+' || teclas.value === '-' || teclas.value === '*' || teclas.value === '/'){
            operacaoSelecionada = teclas.value
            valor1 = Number(display.value)
            display.value = ''
        } else if (teclas.value === '=') {
            resultado()
        } else if (teclas.value === 'C') {
            display.value = ''
        } else {
            display.value = display.value + teclas.value
        }

    })
}

function resultado() {
    var valor2 = Number(display.value)
    
    switch (operacaoSelecionada) {
        case '+':
            resultadoFinal = valor1 + valor2
            break
    }

    display.value = resultadoFinal
}

limpar.addEventListener('click', () => {
    display.value = ''
})