function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
    if (elemento === null) {
    }
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();  
    }
    else {
        alert('elemento foi pro espaço');
        }
        
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {
        if (e.code === "Enter" || e.code === "Space") {
            tecla.classList.add('ativa')
        }
        else {
            tecla.classList.remove('ativa')
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}