import Kata from "./Kata";

export default class Catologo {

  constructor() {
    this.katas = []; 
  }
    
  agregarKata(kata) {
    this.katas.push(kata); 
  }
  obtenerListaTitulos() {
    let titulos = [];
    for(let indiceKata = 0; indiceKata < this.katas.length ; indiceKata++){
      titulos.push(this.katas[indiceKata].obtenerTitulo());
    }
    return titulos; 
  }
  obtenerListaKatas(){
    return this.katas;
  }

  buscarTitulo(terminoBusqueda) { 
    terminoBusqueda = terminoBusqueda.toLowerCase()
    let listaFiltrada = this.obtenerListaTitulos().filter(item => 
      item.toLowerCase().includes(terminoBusqueda)
    ); 
    return listaFiltrada
  }
  
  buscarKata(terminoBusqueda) { 
    terminoBusqueda = terminoBusqueda.toLowerCase();
    let katasBuscadas = []; 
    this.obtenerListaTitulos().forEach((item, index) => {
      if (item.toLowerCase().includes(terminoBusqueda)) {
        katasBuscadas.push(this.katas[index]);
      }
    });
    return katasBuscadas;
  }
}