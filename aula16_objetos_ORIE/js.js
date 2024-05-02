/* const user = {
    nome: "Caio",
    DN: "07/05/2023",
    email: "caio@paz.com",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Reginaldo",
    email: "naldo@s.com",
    role: "admin",
    criaCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)

user.exibirInfos()

const exibir = function () {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)

exibirNome()
exibir() */

function User () {
    const User2 = {
        nome: 'Caio'
    }
    Object.setPrototypeOf(User, User2)
    User.prototype.nome = 'Caio2'
    console.log(this.nome)
}




User.prototype.teste = 'testesasas'


let testeUm = new User()

console.log(testeUm.teste)
