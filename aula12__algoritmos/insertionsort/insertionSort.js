const livros = require('./precosLivros')

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise)
            analise--
        }
    }
    console.log(lista);
}

function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
   
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
   }

insertionSort(livros)
