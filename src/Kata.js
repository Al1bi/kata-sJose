export default class Kata{
  constructor(id, titulo, descripcion, dificultad){
    this.id = id;
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
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
};