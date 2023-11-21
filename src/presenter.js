import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";
import Singleton from "./Singleton.js";

const searchForm = document.querySelector("#search_form");
const orderForm = document.querySelector("#order_form")
const div_result = document.querySelector("#show_result");

let catologo = new Catologo(); 
catologo.katas = Singleton.getInstance().katas;


window.onload = llenarCatologo(); 

function llenarCatologo() { 
  let table = crearTable();
  let katas = catologo.obtenerListaKatasOrdTituloAsc();
  llenarTable(katas, table);
  agregarEscuchadoresBotonesLeer();
}

function crearTable(){
  div_result.innerHTML = " ";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  ["Título", "Descripción", "Ver más", "Dificultad"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  return table;
}

function llenarTable(katas, table){

  let tbody = document.createElement("tbody");

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
    inputElement.className = "see_more";
    inputElement.value = "Leer mas";
    inputElement.id = "detalle_button" + kataIndex;
    inputCell.appendChild(inputElement);
    row.appendChild(inputCell);
    let difficultyCell = document.createElement("td");
    difficultyCell.textContent = katas[kataIndex].obtenerDificultad();
    row.appendChild(difficultyCell);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  div_result.appendChild(table);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let table = crearTable();
  const terminoDeBusqueda = document.querySelector("#search_box").value;
  let katas = catologo.buscarKata(terminoDeBusqueda);
  llenarTable(katas, table);
  agregarEscuchadoresBotonesLeer();
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let table = crearTable(); 
  const atributo = document.querySelector("#order_attribute").value; 
  if(atributo === "DiffAsc") {
    katas = catologo.obtenerKatasOrdenadasPorDificultadAsc(); 
  }
  llenarTable(katas, table); 
  agregarEscuchadoresBotonesLeer();
}); 

function agregarEscuchadoresBotonesLeer() {
  let buttons = document.querySelectorAll('[id^="detalle_button"]');
  console.log(buttons);
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      let index = this.id.replace('detalle_button', '');
      window.location.href = "./detalleKata.html?indexKata="+index;
    });
  });
}