export default class Kata{
  constructor(titulo, descripcion, dificultad, estado){
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.estado = estado;
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
  obtenerEstado(){
    return this.estado;
  }
};