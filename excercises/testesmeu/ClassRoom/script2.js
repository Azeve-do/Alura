var listaProfessores = [
    {nome: 'Luciana Cassia', turma: '1º Ano A' /* & '1º Ano G' */},
    {nome: 'Jussara', turma: '1º Ano B'},
    {nome: 'Aldenice', turma: '1º Ano C' /* & '2º Ano G' */},
    {nome: 'Marli', turma: '1º Ano D'},
    {nome: 'Ana Marta', turma: '1º Ano E'},
    {nome: 'Ivana', turma: '1º Ano F'},
    {nome: 'Sineia', turma: '2º Ano A'},
    {nome: 'Edjane', turma: '2º Ano B'},
    {nome: 'Lenice', turma: '2º Ano C'},
    {nome: 'Ana Cristina', turma: '2º Ano D'},
    {nome: 'Silvia Araujo', turma: '2º Ano E'},
    {nome: 'Graça', turma: '2º Ano F' /* & '3º Ano B' */},
    {nome: 'Rosimere', turma: '3º Ano A'},
    {nome: 'Giscelia', turma: '3º Ano C'},
    {nome: 'Adriana Matreiro', turma: '3º Ano D'},
    {nome: 'Silvia Maria', turma: '3º Ano E'},
    {nome: 'Valeria', turma: '3º Ano F'},
    {nome: 'Adriana Dias', turma: '4º Ano A' /* & '5º Ano E' */},
    {nome: 'Vanilza', turma: '4º Ano B' /* & '5º Ano C' */},
    {nome: 'Lucimara Faria', turma: '4º Ano C'},
    {nome: 'Vilma', turma: '4º Ano D'},
    {nome: 'Luciane', turma: '4º Ano E'},
    {nome: 'Andrea', turma: '5º Ano A'},
    {nome: 'Jorge', turma: '5º Ano B'},
    {nome: 'Adriane Kenia', turma: '5º Ano D'},
    
]

const alternativa = document.getElementById('alternativa1')
const alternativaDois = document.getElementById('alternativa2')
const alternativaTres = document.getElementById('alternativa3')
const alternativaQuatro = document.getElementById('alternativa4')

const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const turmaAleatorio = listaProfessores[professorAleatorioIndex].turma
const professorAleatorio = listaProfessores[professorAleatorioIndex].nome

questaoProf.innerText = professorAleatorio
alternativa.innerText = turmaAleatorio
alternativaDois.innerText = turmaAleatorio
alternativaTres.innerText = turmaAleatorio
alternativaQuatro.innerText = turmaAleatorio


const listaSalas = ["1º Ano A", "1º Ano B", "1º Ano C", "1º Ano D", "1º Ano E", "1º Ano F", "1º Ano G", "2º Ano A", "2º Ano B", "2º Ano C", "2º Ano D", "2º Ano E", "2º Ano F", "2º Ano G", "3º Ano A", "3º Ano B", "3º Ano C", "3º Ano D", "3º Ano E", "3º Ano F", "4º Ano A", "4º Ano B", "4º Ano C", "4º Ano D", "4º Ano E", "5º Ano A", "5º Ano B","5º Ano C", "5º Ano D", "5º Ano E"]



/* var opçoesIndex = Math.floor(Math.random() * listaSalas.length);
var opçoesIndex2 = Math.floor(Math.random() * listaSalas.length);
var opçoesIndex3 = Math.floor(Math.random() * listaSalas.length);
var opçoesIndex4 = Math.floor(Math.random() * listaSalas.length);

var opçoesAleatorio = listaSalas[opçoesIndex]
var opçoesAleatorio2 = listaSalas[opçoesIndex2]
var opçoesAleatorio3 = listaSalas[opçoesIndex3]
var opçoesAleatorio4 = listaSalas[opçoesIndex4]  */





function alternativasAleatorias () {
    let contagem = 0
    
}