const livros = require('./precosLivros')

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }

}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} sendo ele: ${livros[maisBarato].titulo}`)