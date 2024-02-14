

var listaProfessores = ["Teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10"]


const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const professorAleatorio = listaProfessores[professorAleatorioIndex]

function ConsoleLog (element, novoTexto) {
    element.innerText = novoTexto

}