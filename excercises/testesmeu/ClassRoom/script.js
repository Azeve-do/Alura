const dezR = document.getElementById('10r')
const cincoR = document.getElementById('5r')
const tresR = document.getElementById('3r')
const semLimites = document.getElementById('semL')
const questaoProf = document.getElementById('professor')

var quantidadeDeRodadas = 0

var listaProfessores = ["Teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10"]


function alterarTexto(element, novoTexto) {
    element.innerText = novoTexto
}


dezR.addEventListener('click', ()=> {

    window.location.href = "Asrodadas.html"
    
    quantidadeDeRodadas = 10;

    alterarTexto(questaoProf, 'teste')

    /* while (quantidadeDeRodadas < 10) {
        questaoProf
    }  */
})
