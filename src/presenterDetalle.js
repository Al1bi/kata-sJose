import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const titulo_detalle_div = document.querySelector("#titulo_detalle_div");

let params = new URLSearchParams(window.location.search);
let indexKata = params.get('indexKata');

let catologo = new Catologo(); 

catologo.agregarKata(new Kata("Joselito")); 
catologo.agregarKata(new Kata("Borisaurio")); 
catologo.agregarKata(new Kata("Maquinolas"));
catologo.agregarKata(new Kata("Icepecitos"));
catologo.agregarKata(new Kata("M&M's"));

let katas = catologo.obtenerListaKatas();

titulo_detalle_div.innerHTML += katas[indexKata].obtenerTitulo();
