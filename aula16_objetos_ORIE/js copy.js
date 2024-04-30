function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }

   const outroUser2 = {
    nome: 'Caio',
    email: 'caio@paz.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com
   newUser.exibeInfos.call(outroUser2)