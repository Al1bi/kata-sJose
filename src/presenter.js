import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const form = document.querySelector("#request");
const div = document.querySelector("#show_result");

let catologo = new Catologo(); 
catologo.agregarKata(new Kata("Joselito")); 
catologo.agregarKata(new Kata("Borisaurio")); 
catologo.agregarKata(new Kata("Maquinolas"));
catologo.agregarKata(new Kata("Icepecitos"));
catologo.agregarKata(new Kata("M&M's"));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "";
  let titulos = catologo.obtenerListaTitulos();
  for(let i = 0; i < titulos.length; i++)
  {
    console.log("<div>" + titulos[i] + "</div>");
    div.innerHTML += "<div>" + i + ", " + titulos[i] + "</div>";
  }
});
