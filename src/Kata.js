export default class Kata{
  constructor(id, titulo, descripcion, dificultad, categoria){
    this.id = id;
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.categoria = categoria
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

};