export default class Kata{
  constructor(titulo, descripcion, dificultad, estado){
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.dificultad = dificultad;
    if(estado != null) this.estado = estado;
    else this.estado = "no terminado";

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
  obtenerEstado()
  {
    return this.estado;
  }
  
};