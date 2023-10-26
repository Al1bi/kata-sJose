
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

  ordenarPorTituloAsc(){
    this.katas.sort(function (a, b) {
      if (a.obtenerTitulo() > b.obtenerTitulo()) {
        return 1;
      }
      if (a.obtenerTitulo() < b.obtenerTitulo()) {
        return -1;
      }
      return 0;
    });
  }

  obtenerListaTitulosOrdenadaAsc(){
    this.ordenarPorTituloAsc();
    let titulos = [];
    for(let indiceKata = 0; indiceKata < this.katas.length ; indiceKata++){
      titulos.push(this.katas[indiceKata].obtenerTitulo());
    }
    return titulos;
  }

  buscarTitulo(terminoBusqueda) { 
    terminoBusqueda = terminoBusqueda.toLowerCase()
    let listaFiltrada = this.obtenerListaTitulos().filter(item => 
      item.toLowerCase().includes(terminoBusqueda)
    ); 
    return listaFiltrada;
  }
   
  terminoVacio(termino) {
    if(termino === "") 
      return true; 
    else 
      return false; 
  }
  
  buscarKata(terminoBusqueda) { 
    let katasFiltradas = []; 
    terminoBusqueda = terminoBusqueda.toLowerCase();
    this.obtenerListaTitulos().forEach((item, index) => {
      if (item.toLowerCase().includes(terminoBusqueda)) {
        katasFiltradas.push(this.katas[index]);
      }
    });
    if(this.terminoVacio(terminoBusqueda)) 
      katasFiltradas = this.obtenerListaKatas(); 
    return katasFiltradas;
  }
  buscarKataPorDificultad(dificultad) { 
    let coincidencias = []; 
    this.obtenerListaKatas().forEach((item) => {
      if (item.obtenerDificultad() == dificultad) {
        coincidencias.push(item);
      }
    });
    return coincidencias;
  }
}