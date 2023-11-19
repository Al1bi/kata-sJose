import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";
import Singleton from "./Singleton.js";

const searchFormDifficulty = document.querySelector("#search_form_difficulty");
const div_results_search_difficulty = document.querySelector("#show_result_search_difficulty");


let catologo = new Catologo();
catologo.katas = Singleton.getInstance().katas;


searchFormDifficulty.addEventListener("submit", (event) => {
  event.preventDefault();
  div_results_search_difficulty.innerHTML = ""; 
  console.log("asdadasdas");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headerRow = document.createElement("tr");
  ["Título", "Descripción", "Acción", "Dificultad"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const terminoDeBusqueda = document.querySelector("#search_box_difficulty").value;
  let katas = catologo.buscarKataPorDificultad(terminoDeBusqueda);
  for(let kataIndex in katas) {
      let row = document.createElement("tr");
      let titleCell = document.createElement("td");
      titleCell.textContent = katas[kataIndex].obtenerTitulo();
      row.appendChild(titleCell);
      let descriptionCell = document.createElement("td");
      descriptionCell.textContent = katas[kataIndex].obtenerDescripcion();
      row.appendChild(descriptionCell);
      let inputCell = document.createElement("td");
      let inputElement = document.createElement("input");
      inputElement.type = "submit";
      inputElement.value = "Leer mas";
      inputElement.id = "detalle_button" + kataIndex;
      inputElement.className = "see_more";
      inputCell.appendChild(inputElement);
      row.appendChild(inputCell);
      let difficultyCell = document.createElement("td");
      difficultyCell.textContent = katas[kataIndex].obtenerDificultad();
      row.appendChild(difficultyCell);
      tbody.appendChild(row);
  }
  table.appendChild(tbody);
  div_results_search_difficulty.appendChild(table);
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