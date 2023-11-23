export default class DetalleView {
  presenterPath() {
    return `./presenterDetalle.js`;
  }

  render() {
    return `<div>
      <p>
        <a href="\\" onclick="route()">
          <button id="volver_atras">Volver atras</button>
        </a>
      </p> 
      <div>
        <div id="titulo_detalle_div"></div>

        <div>
          <h2>Descripcion</h2> 
          <div id="descripcion_detalle_div"></div>
        </div> 

        <div>
          <h2>Dificultad</h2> 
          <div id="dificultad_detalle"> </div> 
        </div> 

        <div>
          <h2>Categoria</h2> 
          <div id="categoria_detalle"> </div> 
        </div> 

        <div>
          <h2>Autor</h2> 
          <div id="autor_detalle"> </div> 
        </div> 

        <div>
          <h2>Fecha de creacion</h2> 
          <div id="fecha_creacion_detalle"> </div> 
        </div> 

        <div>
          <h2>Solucion disponible</h2> 
          <div id="solucion_disponible_detalle"> </div> 
        </div> 

      </div>
    </div>`;
  }
}