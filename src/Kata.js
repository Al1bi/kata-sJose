export default class Kata{
  constructor(id, titulo, descripcion, dificultad, categoria, urlSolucion){
    this.id = id;
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.categoria = categoria;
    this.urlSolucion = urlSolucion;
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
    return "Joselito"; 
  }

  tieneSolucion(){
    if(this.urlSolucion == "" || this.urlSolucion == undefined) return false;
    return true;
  }

};