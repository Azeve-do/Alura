const teclado = document.querySelectorAll('input[type=button]')
const display = document.querySelector('input[type=tel]')

const apagar = document.querySelector('#clear')


for (let i = 0; i < teclado.length; i++) {
  const teclas = teclado[i]
  
  teclas.onclick = function() {
    display.value = display.value + teclas.value
  }
  
  apagar.onclick = function apagador() {
    display.value = display.value - teclas.value
    
  }
}
