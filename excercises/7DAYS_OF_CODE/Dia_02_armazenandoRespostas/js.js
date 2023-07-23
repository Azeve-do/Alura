var nome = prompt('Qual seu nome')
var idade = prompt('Quantos anos você tem?')
var linguaguem = prompt('Qual linguagem você quer aprender?')

const frase = document.querySelector('#frase');
const feedback = document.querySelector('#textfeedback')
const meuFormulario = document.getElementById('meuForm')

frase.innerHTML = 'Seu nome é ' + `${nome},` + ' e você tem ' + `${idade}` + ' anos de idade.'

feedback.innerHTML = 'vc gosta de aprender ' + `${linguaguem}? 1 para SIM, 2 para NÃO` 



meuFormulario.addEventListener('submit', (event) => {
    event.preventDefault();

    var respostfeed = document.querySelector('input[type=text]')
    var valorfeed = respostfeed.value

    if (valorfeed == 1) {
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } 

    else if (valorfeed == 2) {
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    }
    else {
        alert('Número inválido, tente novamente.')
    }
}) 


