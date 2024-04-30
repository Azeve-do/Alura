const user = {
    nome: "Caio",
    DN: "07/05/2023",
    email: "caio@paz.com",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()

const exibir = function () {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)

exibirNome()
exibir()