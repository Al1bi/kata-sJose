import Catologo from "./Catalogo.js";
import Singleton from "./Singleton.js";

const titulo_detalle_div = document.querySelector("#titulo_detalle_div");
const descripcion_detalle_div = document.querySelector("#descripcion_detalle_div");
const dificultad_detalle = document.querySelector("#dificultad_detalle");  
const categoria_detalle = document.querySelector("#categoria_detalle");  
const autor_detalle = document.querySelector("#autor_detalle ");  
const fecha_creacion_detalle = document.querySelector("#fecha_creacion_detalle ");  
const solucion_disponible_detalle = document.querySelector("#solucion_disponible_detalle "); 

let params = new URLSearchParams(window.location.search);
let indexKata = params.get('indexKata');

let catologo = new Catologo();
catologo.katas = Singleton.getInstance().katas;

let katas = catologo.obtenerListaKatas();

function llenarDetalle(kata) {
    descripcion_detalle_div.className = "see_more";
    titulo_detalle_div.innerHTML += kata.obtenerTitulo();
    descripcion_detalle_div.innerHTML += kata.obtenerDescripcion();
    dificultad_detalle.innerHTML += kata.obtenerDificultad(); 
    categoria_detalle.innerHTML += kata.obtenerCategoria(); 
    autor_detalle.innerHTML += kata.obtenerAutor(); 
    fecha_creacion_detalle.innerHTML += kata.obtenerFechaCreacion(); 
    if(kata.tieneSolucion()) {
        solucion_disponible_detalle.innerHTML += 'Si'; 
    } else {
        solucion_disponible_detalle.innerHTML += "No"; 
    }
}

llenarDetalle(katas[indexKata]); 

