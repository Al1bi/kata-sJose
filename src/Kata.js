export default class Kata{
  constructor(id, titulo, descripcion, dificultad, categoria, urlSolucion, autor, fechaDeCreacion){
    this.id = id;
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.categoria = categoria;
    this.urlSolucion = urlSolucion;
    this.autor = autor;
    this.fechaDeCreacion = fechaDeCreacion;
  }

  obtenerTitulo(){
    return this.titulo;
  }
  obtenerDescripcion()
  {
    return this.descripcion;
  }
  obtenerDificultad()
  {
    return this.dificultad;
  }

  obtenerId(){
    return this.id;
  }

  obtenerCategoria() {
    return this.categoria; 
  }

  obtenerUrlSolucion(){
    return this.urlSolucion;
  }
  
  obtenerAutor() {
    return this.autor; 
  }

  tieneSolucion(){
    if(this.urlSolucion == "" || this.urlSolucion == undefined) return false;
    return true;
  }
  obtenerFechaCreacion(){
    return this.fechaDeCreacion;
  }
  descomponerFecha(){
    let partes = this.fechaDeCreacion.split('-').map(Number);
    return partes;
  }
  compararFechaMayor(otraKata){
    let kataActualEsMayor = new Date(this.descomponerFecha()) > new Date(otraKata.descomponerFecha()) 
    return kataActualEsMayor;
  }
  compararFechaMenor(otraKata)
  {
    let kataActualEsMenor = new Date(this.descomponerFecha()) < new Date(otraKata.descomponerFecha());
    return kataActualEsMenor;
  }

};