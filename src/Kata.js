export default class Kata{
  constructor(titulo, descripcion){
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
  obtenerTitulo(){
    return this.titulo;
  }
  obtenerDescripcion()
  {
    return this.descripcion;
  }
};