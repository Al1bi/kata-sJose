export default class Kata{
  constructor(titulo, descripcion, dificultad, estadoTerminado){
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad; 
    if(estadoTerminado === undefined) 
      this.estadoTerminado = false; 
    else 
      this.estadoTerminado = estadoTerminado; 
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
    return this.estadoTerminado; 
  }

  cambiarEstado() {
    return true; 
  }
};