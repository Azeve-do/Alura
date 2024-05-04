import User from './User.js'
import Admin from './Admin.js'
import Docente from './Docente.js'

const novoUser2 = new User('Caua', 'caua@gmail.com', '26-08-2004')
console.log(novoUser2.exibirInfos())

const novoAdmin2 = new Admin('Caioba', 'caiopaz@gmail.com', '02/04/200')
console.log(novoAdmin2.exibirInfos())