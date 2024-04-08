var listaProfessores = [
    {nome: 'Luciana Cassia', turma: '1º Ano A'},
    {nome: 'Luciana Cassia ', turma: '1º Ano G'},
    {nome: 'Jussara', turma: '1º Ano B'},
    {nome: 'Aldenice', turma: '1º Ano C'},
    {nome: 'Aldenice ', turma: '2º Ano G'},
    {nome: 'Marli', turma: '1º Ano D'},
    {nome: 'Ana Marta', turma: '1º Ano E'},
    {nome: 'Ivana', turma: '1º Ano F'},
    {nome: 'Sineia', turma: '2º Ano A'},
    {nome: 'Edjane', turma: '2º Ano B'},
    {nome: 'Lenice', turma: '2º Ano C'},
    {nome: 'Ana Cristina', turma: '2º Ano D'},
    {nome: 'Silvia Araujo', turma: '2º Ano E'},
    {nome: 'Graça', turma: '2º Ano F'},
    {nome: 'Graça ', turma: '3º Ano B'},
    {nome: 'Rosimere', turma: '3º Ano A'},
    {nome: 'Giscelia', turma: '3º Ano C'},
    {nome: 'Adriana Matreiro', turma: '3º Ano D'},
    {nome: 'Silvia Maria', turma: '3º Ano E'},
    {nome: 'Valeria', turma: '3º Ano F'},
    {nome: 'Adriana Dias', turma: '4º Ano A'},
    {nome: 'Adriana Dias ', turma: '5º Ano E'},
    {nome: 'Vanilza', turma: '4º Ano B'},
    {nome: 'Vanilza ', turma: '5º Ano C'},
    {nome: 'Lucimara Faria', turma: '4º Ano C'},
    {nome: 'Vilma', turma: '4º Ano D'},
    {nome: 'Luciane', turma: '4º Ano E'},
    {nome: 'Andrea', turma: '5º Ano A'},
    {nome: 'Jorge', turma: '5º Ano B'},
    {nome: 'Adriane Kenia', turma: '5º Ano D'},
    
]
const listaSalas = [
    "1º Ano A",
    "1º Ano B",
    "1º Ano C",
    "1º Ano D",
    "1º Ano E",
    "1º Ano F",
    "1º Ano G",
    "2º Ano A",
    "2º Ano B",
    "2º Ano C",
    "2º Ano D",
    "2º Ano E",
    "2º Ano F",
    "2º Ano G",
    "3º Ano A",
    "3º Ano B",
    "3º Ano C",
    "3º Ano D",
    "3º Ano E",
    "3º Ano F",
    "4º Ano A",
    "4º Ano B",
    "4º Ano C",
    "4º Ano D",
    "4º Ano E",
    "5º Ano A",
    "5º Ano B",
    "5º Ano C",
    "5º Ano D",
    "5º Ano E",
]

// ------ VARIÁVEIS PARA EXIBIÇÃO DO FRONT-END
const idRodadas = document.getElementById('identificacao-rodadas');
const alternativa = document.getElementById('alternativa1')
const alternativaDois = document.getElementById('alternativa2')
const alternativaTres = document.getElementById('alternativa3')
const alternativaQuatro = document.getElementById('alternativa4')


// ------ VARIÁVEIS PARA O SUBMIT DO FORM
const formulario = document.getElementById('form')
const valorInput = document.getElementById("iprimeira")
const valorInputDois = document.getElementById("isegunda")
const valorInputTres = document.getElementById("iterceira")
const valorInputQuatro = document.getElementById("iquarta")
const botaoSair = document.getElementById('botao-sair')


// ------ VARIÁVEIS PARA O MODAL ----------
const modal = document.querySelector('#modal')
const modal2 = document.querySelector('#modal2')
const botaoProxRodada = document.getElementById('btn-prox-rodada')
const botaoPaginaInicial = document.getElementById('btn-paginaInicial')
var textoAcertoOuErro = document.querySelector('#texto-resposta')
var respostaCerta = document.querySelector('#texto-resposta-certa')
const contagemAcertos = document.getElementById('contagem-de-acertos')


// ------ VARIÁVEIS PARA O BACK-END
const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const professorAleatorio = listaProfessores[professorAleatorioIndex].nome
const listaEscolhasAleatorias = []
var quantidadeAcerto = 0
var intContagemAcertos = sessionStorage.getItem('contagem')

var rodadasLimites = 10

questaoProf.innerText = professorAleatorio

while (listaEscolhasAleatorias.length < 3){

    var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
    var opçoesAleatorio = listaSalas[opçoesIndex]

    listaEscolhasAleatorias.push(opçoesAleatorio)
}


listaProfessores.forEach((professor) => {
    var numeroAleatorioEntreQuatro = Math.floor(Math.random() * (0, 3 + 1))

    if(professor.nome == professorAleatorio) {
        console.log(professor.turma)
        if(professor.turma == listaEscolhasAleatorias[0] || professor.turma == listaEscolhasAleatorias[1] || professor.turma == listaEscolhasAleatorias[2]) {
            location.reload()
        } else {
            listaEscolhasAleatorias.splice(numeroAleatorioEntreQuatro, 0, professor.turma)
        }

    }
})

const alternativasUnicas = Array.from(new Set(listaEscolhasAleatorias))

while(alternativasUnicas.length < 4) {

    var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
    var opçoesAleatorio = listaSalas[opçoesIndex]

    if(opçoesAleatorio == alternativasUnicas[0] || opçoesAleatorio == alternativasUnicas[1] || opçoesAleatorio == alternativasUnicas[2]) {
        location.reload()
    } else {
        alternativasUnicas.push(opçoesAleatorio)
    }
    
} 

alternativa.innerText = alternativasUnicas[0]
alternativaDois.innerText = alternativasUnicas[1]
alternativaTres.innerText = alternativasUnicas[2]
alternativaQuatro.innerText = alternativasUnicas[3]

valorInput.value = alternativasUnicas[0]
valorInputDois.value = alternativasUnicas[1]
valorInputTres.value = alternativasUnicas[2]
valorInputQuatro.value = alternativasUnicas[3]



formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    var selected = document.querySelector("input[name='resposta']:checked").value;

    listaProfessores.forEach((professor) => {
        if(professor.nome == professorAleatorio) {
            if(professor.turma == selected) {
                contarAcertos()
                textoAcertoOuErro.style.backgroundColor = '#62D467'
                textoAcertoOuErro.innerHTML = 'ACERTOU!'
                modal.showModal()
            } else { 
                textoAcertoOuErro.style.backgroundColor = '#D46262'
                textoAcertoOuErro.innerHTML = 'ERROU!'
                respostaCerta.innerText = `R: ${professor.turma}`
                modal.showModal()
            }
        }
    })

    somarRodadas()
    
})

var NumeroRodadas = sessionStorage.getItem('Rodadas')

idRodadas.innerText = NumeroRodadas || '1'

function somarRodadas () {
    idRodadas.innerHTML = parseInt(idRodadas.innerText) + 1;
    sessionStorage.setItem('Rodadas', idRodadas.innerText)
}

function contarAcertos () {
    quantidadeAcerto = Number(intContagemAcertos) + 1
    sessionStorage.setItem('contagem', quantidadeAcerto)

    contagemAcertos.innerText = `0${quantidadeAcerto - 1}/0${Number(rodadasLimites)}`
}

if(NumeroRodadas > rodadasLimites) {
    contarAcertos()
    modal2.showModal()
}


botaoProxRodada.addEventListener('click', () => {
    location.href = 'Asrodadas10.html'
})

botaoPaginaInicial.addEventListener('click', () => {
    sessionStorage.removeItem('contagem')
    sessionStorage.removeItem('Rodadas')
    modal2.showModal()
}) 

