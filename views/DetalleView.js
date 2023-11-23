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
    <div id="titulo_detalle_div"></div>
    <div id="descripcion_detalle_div"></div>
    </div>`;
  }
}