const nomes = ['Caio', 'João','João','Simone', 'Simone']

/* const meuSet = new Set(nomes) */

const nomesAtualizados = [... new Set(nomes)]

console.log(nomesAtualizados)