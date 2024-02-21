

var listaProfessores = [
    {nome: 'Luciana Cassia', turma: '1º Ano A' & '1º Ano G'},
    {nome: 'Jussara', turma: '1º Ano B'},
    {nome: 'Aldenice', turma: '1º Ano C' & '2º Ano G'},
    {nome: 'Marli', turma: '1º Ano D'},
    {nome: 'Ana Marta', turma: '1º Ano E'},
    {nome: 'Ivana', turma: '1º Ano F'},
    {nome: 'Sineia', turma: '2º Ano A'},
    {nome: 'Edjane', turma: '2º Ano B'},
    {nome: 'Lenice', turma: '2º Ano C'},
    {nome: 'Ana Cristina', turma: '2º Ano D'},
    {nome: 'Silvia Araujo', turma: '2º Ano E'},
    {nome: 'Graça', turma: '2º Ano F' & '3º Ano B'},
    {nome: 'Rosimere', turma: '3º Ano A'},
    {nome: 'Giscelia', turma: '3º Ano C'},
    {nome: 'Adriana Matreiro', turma: '3º Ano D'},
    {nome: 'Silvia Maria', turma: '3º Ano E'},
    {nome: 'Valeria', turma: '3º Ano F'},
    {nome: 'Adriana Dias', turma: '4º Ano A' & '5º Ano E'},
    {nome: 'Vanilza', turma: '4º Ano B' & '5º Ano C'},
    {nome: 'Lucimara Faria', turma: '4º Ano C'},
    {nome: 'Vilma', turma: '4º Ano D'},
    {nome: 'Luciane', turma: '4º Ano E'},
    {nome: 'Andrea', turma: '5º Ano A'},
    {nome: 'Jorge', turma: '5º Ano B'},
    {nome: 'Adriane Kenia', turma: '5º Ano D'},
    
]


const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const professorAleatorio = listaProfessores[professorAleatorioIndex]

function ConsoleLog (element, novoTexto) {
    element.innerText = novoTexto

}