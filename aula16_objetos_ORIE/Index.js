import User from './User.js'
import Admin from './Admin.js'
import Docente from './Docente.js'

const novoUser2 = new User('Caua', 'Paz Nunes de Azevedo', 'caua@gmail.com', '26-08-2004')
console.log(novoUser2.exibirInfos())
console.log(novoUser2.nome)
console.log(novoUser2.sobrenome)
