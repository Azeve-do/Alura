import User from './User.js'

export default class Docente extends User {
    constructor (nome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `${estudante} aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente('Rodrigo', 'Rodrigo@gmail.com', '2023-01-01' )
