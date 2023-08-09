const notas = [10, 9, 8, 7]

const notasAtualizadas = 
    notas.map((lixo) => {
        return lixo + 1 >= 10 ? 10 : lixo + 1;
    })

console.log(notasAtualizadas)