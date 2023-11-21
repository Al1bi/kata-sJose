import Catologo from "./Catalogo.js";
import Singleton from "./Singleton.js";

const titulo_detalle_div = document.querySelector("#titulo_detalle_div");
const descripcion_detalle_div = document.querySelector("#descripcion_detalle_div");

let params = new URLSearchParams(window.location.search);
let indexKata = params.get('indexKata');

let catologo = new Catologo();
catologo.katas = Singleton.getInstance().katas;

let katas = catologo.obtenerListaKatas();

descripcion_detalle_div.className = "see_more";
titulo_detalle_div.innerHTML += katas[indexKata].obtenerTitulo();
descripcion_detalle_div.innerHTML += katas[indexKata].obtenerDescripcion();
