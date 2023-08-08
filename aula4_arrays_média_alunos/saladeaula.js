const nome = ['Caio', 'João', 'Ana', 'Bruna']
const media = [10, 9, 8, 7]

const alunoEmedia = [nome, media]

function acharNome (aluno) {
    if(alunoEmedia[0].includes(aluno)) {
        const [alunos, media] = alunoEmedia
        
        const indice = alunos.indexOf(aluno)

        const mediaAluno = media[indice]
        console.log(`${aluno} cadastrado. Media ${mediaAluno}`)

    } else {
        console.log('Não cadastrado.')
    }
}

acharNome('')