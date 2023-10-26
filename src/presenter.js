import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const form = document.querySelector("#request");
const searchForm = document.querySelector("#search_form");
const div = document.querySelector("#show_result");
const div_results_search = document.querySelector("#show_result_search");

let botonMostrarCatalogo = document.querySelector("#enviar_button");

let catologo = new Catologo(); 

catologo.agregarKata(new Kata("FizzBuzz", "A program that prints numbers from 1 to 100, but for multiples of three it prints “Fizz” instead of the number and for the multiples of five it prints “Buzz”. For numbers which are multiples of both three and five it prints “FizzBuzz”."));
catologo.agregarKata(new Kata("PrimeFactors", "Compute the prime factors of a given natural number."));
catologo.agregarKata(new Kata("BowlingScore", "Calculate the total score of a bowling game."));
catologo.agregarKata(new Kata("CoinChange", "Given a number of denominations and a sum, find the minimum number of coins that make up the sum."));
catologo.agregarKata(new Kata("StringCalculator", "Create a simple String calculator with a method that takes a string and returns its sum."));
catologo.agregarKata(new Kata("PalindromeCheck", "Determine if a given string is a palindrome."));
catologo.agregarKata(new Kata("LongestSubarraySum", "Find the length of the longest subarray with a given sum."));
catologo.agregarKata(new Kata("AnagramDetection", "Detect if two strings are anagrams."));
catologo.agregarKata(new Kata("BinarySearchTree", "Implement a binary search tree with methods for insertion, deletion and in-order traversal."));
catologo.agregarKata(new Kata("MaxPathSum", "Find the maximum path sum in a binary tree."));
catologo.agregarKata(new Kata("ShortestPathMaze", "Find the shortest path in a maze from a given start point to a destination."));
catologo.agregarKata(new Kata("KnightTour", "Find a knight's tour on a chess board."));
catologo.agregarKata(new Kata("KnapsackProblem", "Given weights and values of n items, find the maximum value that can be obtained in the knapsack using the items."));
catologo.agregarKata(new Kata("JobScheduling", "Schedule jobs to maximize profit under given constraints."));
catologo.agregarKata(new Kata("EditDistance", "Compute the minimum number of edits required to change one string into another."));
catologo.agregarKata(new Kata("BalancedBrackets", "Check for balanced brackets in an expression."));
catologo.agregarKata(new Kata("CycleDetection", "Detect a cycle in a directed graph."));
catologo.agregarKata(new Kata("LongestPalindromeSubstring", "Find the longest palindromic substring in a given string."));
catologo.agregarKata(new Kata("PowerSet", "Find all the subsets of a given set of integers."));
catologo.agregarKata(new Kata("MaxFlowNetwork", "Find the maximum flow in a flow network with the Ford-Fulkerson algorithm."));


form.addEventListener("submit", (event) => {
  div.innerHTML = " ";
  event.preventDefault();

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  let headerRow = document.createElement("tr");
  ["Título", "Descripción", "Ver más"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  let katas = catologo.obtenerListaKatas();
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

      tbody.appendChild(row);
  }
  table.appendChild(tbody);

  div.appendChild(table);

  agregarEscuchadoresBotonesLeer();
});


searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  div_results_search.innerHTML = ""; 
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headerRow = document.createElement("tr");
  ["Título", "Descripción", "Acción"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const terminoDeBusqueda = document.querySelector("#search_box").value;
  let katas = catologo.buscarKata(terminoDeBusqueda);
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
      tbody.appendChild(row);
  }
  table.appendChild(tbody);
  div_results_search.appendChild(table);
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