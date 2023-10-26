export default class Kata{
  constructor(titulo, descripcion, dificultad){
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
  obtenerEstado() {
    return false;
  }
};