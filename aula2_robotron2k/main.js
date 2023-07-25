const controle = document.querySelectorAll('[data-controle]')

controle.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
  })
})

function manipulaDados(operacao, controle) {
  
  const peças = controle.querySelector('[data-contador]')

  if(operacao === "-") {
    peças.value = parseInt(peças.value) - 1

  } else {
    peças.value = parseInt(peças.value) + 1
  }
}
