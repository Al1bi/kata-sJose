
export default class Catologo {

  constructor() {
    this.katas = []; 
  }
    
  agregarKata(kata) {
    this.katas.push(kata); 
  }

  obtenerListaTitulos() {
    let titulos = [this.katas[0].obtenerTitulo()];  
    return titulos; 
  }

}