import User from './User.js'

class Admin extends User {
    constructor (nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
        return `${nomeCurso}, tantas vagas ${vagas}`
    }
}

const novoAdmin = new Admin('Caio', 'caio@gmail.com', '07/01/2001')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())

console.log(novoAdmin.criarCurso('Alura', 10))