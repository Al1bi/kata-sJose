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
  ordenarKatasPorUnAtributo(comparador){
    this.katas.sort(comparador);
  }

  ordenarKatasPorTituloAsc(){
    let comparadorNombre = (a, b) => a.obtenerTitulo().localeCompare(b.obtenerTitulo());
    this.ordenarKatasPorUnAtributo(comparadorNombre);
  }

  compararFechas(kata1, kata2, factorDeOrdenamiento){
    if(kata1.compararFechaMayor(kata2)){
      return 1*factorDeOrdenamiento;
    }
    if(kata1.compararFechaMenor(kata2)){
      return -1*factorDeOrdenamiento;
    }
    return 0;
  }
  ordenarPorFechaDeCreacionAscendentemente(){
    this.katas.sort((a,b) => this.compararFechas(a,b,1));
    return this.katas;
  }

  ordenarPorFechaDeCreacionDescendentemente(){
    this.katas.sort((a,b) => this.compararFechas(a,b,-11));
    return this.katas;
  }

  obtenerListaKatasOrdTituloAsc(){
    this.ordenarKatasPorTituloAsc();
    return this.katas;
  }

  obtenerListaKatas(){
    return this.katas;
  }

  obtenerListaTitulosOrdenadaAsc(){
    this.ordenarKatasPorTituloAsc();
    return this.obtenerListaTitulos();
  }

  obtenerKatasOrdenadasPorDificultadAsc(){
    let comparadorDificultad = (kata1, kata2) => kata1.obtenerDificultad() - kata2.obtenerDificultad(); 
    this.ordenarKatasPorUnAtributo(comparadorDificultad)
    return this.katas; 
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

  buscarKataPorCategoria(categoria) {
    let coincidencias = []; 
    this.obtenerListaKatas().forEach((item) => {
      if (item.obtenerCategoria() == categoria) {
        coincidencias.push(item);
      }
    });
    return coincidencias; 
  }

  buscarKatasConSolucion(){
    let katasConSolucion = [];
    this.obtenerListaKatas().forEach((kata) =>{
      if(kata.tieneSolucion()){
        katasConSolucion.push(kata);
      }
    });
    return katasConSolucion;
  }
  
  buscarKatasPorAutor(autorBuscado) {
    let coincidencias = []; 
    this.obtenerListaKatas().forEach((item) => {
      if (item.obtenerAutor() === autorBuscado) {
        coincidencias.push(item);
      }
    });
    return coincidencias; 
  }
}