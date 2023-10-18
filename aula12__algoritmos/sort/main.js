const livros = require('../valorMenorLivros/precosLivros');
const menorValor = require('../valorMenorLivros/menorValor');

for (let atual = 0; atual < livros.length; atual++) {

    let menor = menorValor(livros, atual)
    
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livroAtual[menor];

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)