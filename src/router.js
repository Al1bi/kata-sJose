import CasitaView from "../views/CasitaView.js";
import DetalleView from "../views/DetalleView.js";

const route = (event) => {
  handleLocation();
};

const routes = {
  "/": new CasitaView(),
  "/detalleKata": new DetalleView()
};

const handleLocation = async () => {
  const url = new URL(window.location.href);
  const ruta = url.pathname;

  const parametros = new URLSearchParams(url.search);
  const indexKata = parametros.get('indexKata');

  const view = routes[ruta];
  if (!view) {
    console.error("Ruta no encontrada:", ruta);
    return;
  }

  const html = view.render(indexKata); 
  
  document.getElementById("main-page").innerHTML = html;

  //solucion fea, por que import en parcel no acepta que se le envie la ruta como variable/paramentro
  try {
    if (ruta == "/") {
      await import("./presenterCasita.js");
    }
    if (ruta== "/detalleKata") {
      await import("./presenterDetalle.js");
    }
  } catch (error) {
    console.error("Error al cargar el presentador :", error);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();