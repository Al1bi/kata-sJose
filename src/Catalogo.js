
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

  estaTerminado(kataIndividual){
    return kataIndividual.obtenerEstado() == "terminado"; 
  }

  obtenerKatasTerminadas(){

    let listaKatasTerminadas = []

    for(let indiceKata = 0; indiceKata < this.katas.length ; indiceKata++){
      if(this.estaTerminado(this.katas[indiceKata])){
        listaKatasTerminadas.push(this.katas[indiceKata]);
      }
    }
    

    return listaKatasTerminadas;
  }

  obtenerListaEstados(){

    let estados = [];

    for(let indiceKata = 0; indiceKata < this.katas.length ; indiceKata++){
      estados.push(this.katas[indiceKata].obtenerEstado());
    }

    return estados;
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