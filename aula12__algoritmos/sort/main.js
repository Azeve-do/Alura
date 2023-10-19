const livros = require('../valorMenorLivros/precosLivros');
const menorValor = require('../valorMenorLivros/menorValor');

livros.forEach((_, indice) => {

    let menor = menorValor(livros, indice)
    
    
    let livroAtual = livros[indice];
    let livroMenorPreco = livroAtual[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual

})
    

console.log(livros)