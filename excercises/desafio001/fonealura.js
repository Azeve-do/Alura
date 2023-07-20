const teclado = document.querySelectorAll('input[type=button]')

for (let i = 0; i < teclado.length; i++) {

    const teclas = teclado[i]

    teclas.onclick = function() {

    }

    teclas.onkeydown = function(evento) {

    if(evento.code === "Enter" || evento.code === "Space") {
        teclas.classList.add('ativa')} 

    else {
        teclas.classList.remove('ativa')}

    }
    
        teclas.onkeyup = function() {
        teclas.classList.remove('ativa')    
    }
}