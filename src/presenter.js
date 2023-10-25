import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const form = document.querySelector("#request");
const div = document.querySelector("#show_result");

let botonMostrarCatalogo = document.querySelector("#enviar_button");

let catologo = new Catologo(); 
catologo.agregarKata(new Kata("Joselito")); 
catologo.agregarKata(new Kata("Borisaurio")); 
catologo.agregarKata(new Kata("Maquinolas"));
catologo.agregarKata(new Kata("Icepecitos"));
catologo.agregarKata(new Kata("M&M's"));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "";
  let katas = catologo.obtenerListaKatas();
  for(let kataIndex in katas)
  {
    div.innerHTML +=
    "<div>" +
      katas[kataIndex].obtenerTitulo() +  ", " + katas[kataIndex].obtenerDescripcion() +"<p>" +
      "<input type=\"submit\" value=\"Leer mas\" id=\"detalle_button"+kataIndex+"\"/>" +
    "</div>";
  
  }

  agregarEscuchadoresBotonesLeer();
});

function agregarEscuchadoresBotonesLeer() {
  let buttons = document.querySelectorAll('[id^="detalle_button"]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {

      botonMostrarCatalogo.style.visibility = "hidden";

      let index = this.id.replace('detalle_button', '');
      
      window.location.href = "./detalleKata.html?indexKata="+index;
    });
  });
}