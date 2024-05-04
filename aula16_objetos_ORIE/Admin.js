import User from './User.js'

export default class Admin extends User {
    constructor (nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
        return `${nomeCurso}, tantas vagas ${vagas}`
    }
}

const novoAdmin = new Admin('Caio', 'caio@gmail.com', '07/01/2001')
