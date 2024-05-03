class ChamadaDoMetodoEstatico {
    constructor() {
      console.log(ChamadaDoMetodoEstatico.MetodoEstatico());
      // 'O método estático foi chamado.'
  
      console.log(this.constructor.MetodoEstatico());
      // 'O método estático foi chamado.'
    }
  
    static MetodoEstatico() {
      return "O método estático foi chamado.";
    }
}
  
console.log(ChamadaDoMetodoEstatico.MetodoEstatico())
