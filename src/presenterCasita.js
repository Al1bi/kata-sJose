import Catologo from "./Catalogo.js";
import Singleton from "./Singleton.js";

const searchForm = document.querySelector("#search_form");
const serchAutorForm = document.querySelector("#search_autor_form"); 
const filterForm = document.querySelector("#filter_form");
const difficultyForm = document.querySelector("#difficulty_form");
const div_result = document.querySelector("#show_result");
const button_Solution =  document.querySelector("#filter_with_solution");

let catologo = new Catologo(); 
catologo.katas = Singleton.getInstance().katas;


window.onload = llenarCatologo(); 

function llenarCatologo() { 
  let table = crearTable();
  let katas = catologo.obtenerListaKatasOrdTituloAsc();
  console.log(katas);
  llenarTable(katas, table);
  agregarEscuchadoresBotonesLeer();
}

function crearTable(){
  div_result.innerHTML = " ";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  ["Título", "Descripción",  "Ver más", "Dificultad", "Categoria","Solucion Disponible", "Autor", "Fecha creacion", "Resuelto"].forEach(headerText => {
      let th = document.createElement("th");
      th. textContent = headerText;
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
    inputElement.id = "detalle_button" + katas[kataIndex].obtenerId();
    inputCell.appendChild(inputElement);
    row.appendChild(inputCell);
    let difficultyCell = document.createElement("td");
    difficultyCell.textContent = katas[kataIndex].obtenerDificultad();
    row.appendChild(difficultyCell);
    let categoryCell = document.createElement("td"); 
    categoryCell.textContent = katas[kataIndex].obtenerCategoria(); 
    row.appendChild(categoryCell)
    let solutionCell = document.createElement("td"); 
    if(katas[kataIndex].tieneSolucion()) solutionCell.textContent = "Si";
    else solutionCell.textContent = "No";
    row.appendChild(solutionCell);
    let autorCell = document.createElement("td"); 
    autorCell.textContent = katas[kataIndex].obtenerAutor(); 
    row.appendChild(autorCell);
    tbody.appendChild(row);
    let creationDate = document.createElement("td"); 
    creationDate.textContent = katas[kataIndex].obtenerFechaCreacion(); 
    row.appendChild(creationDate);
    let solvedCell = document.createElement("td"); 
    let checkElement = document.createElement("input");
    checkElement.type = "checkbox";
    checkElement.id = "solved_check" + katas[kataIndex].obtenerId();
    if(katas[kataIndex].estaResuelta()) checkElement.checked = true;
    else checkElement.checked = false;
    solvedCell.appendChild(checkElement);
    row.appendChild(solvedCell);
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

serchAutorForm.addEventListener("submit", (event) => {
  event.preventDefault();  
  let table = crearTable(); 
  const autorBuscado = document.querySelector("#search_autor_box").value;
  let katas = catologo.buscarKatasPorAutor(autorBuscado); 
  llenarTable(katas, table); 
  agregarEscuchadoresBotonesLeer(); 
}); 

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let table = crearTable(); 
  const atributo = document.querySelector("#order_attribute").value; 
  const categoria = document.querySelector("#category_attribute").value;
  if(atributo === "DifficultadAscendente") {
    katas = catologo.obtenerKatasOrdenadasPorDificultadAsc(); 
  }else if(atributo === "CreacionDescendente"){
    katas = catologo.ordenarPorFechaDeCreacionDescendentemente();
  }
  else if(atributo === "CreacionAscendente"){
    katas = catologo.ordenarPorFechaDeCreacionAscendentemente();
  }
  else if(atributo === "NombreAutorDescendente"){
    katas = catologo.ordenarPorAutorDescendentemente();
  }
  else if(atributo === "NombreAutorAscendente"){
    katas = catologo.ordenarPorAutorAscendentemente();
  }
  if(categoria !== "") {
    katas = catologo.buscarKataPorCategoria(categoria); 
  }
  llenarTable(katas, table); 
  agregarEscuchadoresBotonesLeer();
}); 

difficultyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let table = crearTable();
  const atributo = document.querySelector("#difficulty_attribute").value; 
  let katas = catologo.buscarKataPorDificultad(atributo);
  llenarTable(katas, table); 
  agregarEscuchadoresBotonesLeer();
}); 

button_Solution.addEventListener("click", (event) =>{
  event.preventDefault();
  let table = crearTable();
  let katas = catologo.buscarKatasConSolucion();
  llenarTable(katas, table);
  agregarEscuchadoresBotonesLeer();
});

function agregarEscuchadoresBotonesLeer() {
  let buttons = document.querySelectorAll('[id^="detalle_button"]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      let index = this.id.replace('detalle_button', '');
      window.location.href = "/detalleKata?indexKata="+index;
    });
    button.setAttribute('onclick', 'route()');
  });
} 