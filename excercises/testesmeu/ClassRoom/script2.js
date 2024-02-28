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

var listaEscolhasAleatorias = []



const alternativa = document.getElementById('alternativa1')
const alternativaDois = document.getElementById('alternativa2')
const alternativaTres = document.getElementById('alternativa3')
const alternativaQuatro = document.getElementById('alternativa4')

const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const professorAleatorio = listaProfessores[professorAleatorioIndex].nome

questaoProf.innerText = professorAleatorio

window.onload = function alternativasAleatorias () {
    i = 1
    
    while (i <= 4) {
        
        var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
        var opçoesAleatorio = listaSalas[opçoesIndex]

        listaEscolhasAleatorias.push(opçoesAleatorio)
        i ++

    } 

    const alternativasUnicas = Array.from(new Set(listaEscolhasAleatorias))

    while (alternativasUnicas.length < 4){

        var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
        var opçoesAleatorio = listaSalas[opçoesIndex]

        alternativasUnicas.push(opçoesAleatorio)
    }
    
    listaProfessores.forEach((professor) => {
        var numeroAleatorioEntreQuatro = Math.floor(Math.random() * (0, 3 + 1)) + 1
        if(professor.nome == professorAleatorio) {
            alternativasUnicas.splice(numeroAleatorioEntreQuatro, 0, professor.turma)
            console.log(alternativasUnicas)
            console.log(professorAleatorio)
            console.log(numeroAleatorioEntreQuatro)
        }
    })



   /*  alternativa.innerText = alternativasUnicas[0]
    alternativaDois.innerText = alternativasUnicas[1]
    alternativaTres.innerText = alternativasUnicas[2] */

/*     var respostaCorreta = alternativasUnicas.splice(0, numeroAleatorioEntreQuatro, listaProfessores.turma)
 */
    

    /* console.log(respostaCorreta) */
}

