export default class Kata{
  constructor(titulo, descripcion){
    this.descripcion = descripcion;
    this.titulo = titulo;
  }
  obtenerTitulo(){
    return this.titulo;
  }
  obtenerDescripcion()
  {
    return this.descripcion;
  }
};