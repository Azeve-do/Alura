/* function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  } */
  
var gerador = Math.floor(Math.random() * (0, 10))
var resposta = document.querySelector('#resposta')
var enviar = document.querySelector('input[type=submit]')
const formulario = document.querySelector('#meuForm')

console.log(gerador)

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if(resposta != gerador) {
        alert('Resposta errada, tente novamente' + ` estava pensando no ${gerador}` + ` e você respondeu ${resposta}`)
    } else if (resposta == gerador) {
        alert('Parabéns você acertou')
    } 
})
