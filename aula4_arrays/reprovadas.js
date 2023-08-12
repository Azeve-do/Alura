const alunos = ['Caio', 'Bruno', 'Sandra', 'Cauã']
const medias = [10, 4.5, 9, 7]

const reprovados = alunos.filter((_, indice) => medias[indice] < 7) 

console.log(reprovados)