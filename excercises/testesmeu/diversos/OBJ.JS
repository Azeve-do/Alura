class Usuario {
    #nome   
    #email

    constructor (nome, email) {
        this.#nome = nome,
        this.#email = email
    }

    exibirInfos() {
        return `${this.#nome} ${this.#email}`
    }
    
}


const novoUsuario = new Usuario ('Caio', 'caio@gmail.com')

console.log(novoUsuario.exibirInfos())