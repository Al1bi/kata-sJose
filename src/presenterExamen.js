import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const form = document.querySelector("#request");
const searchForm = document.querySelector("#search_form");
const div = document.querySelector("#show_result");
const div_results_search = document.querySelector("#show_result");
let botonMostrarCatalogo = document.querySelector("#enviar_button");

let catologo = new Catologo(); 

catologo.agregarKata(new Kata("FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1, "no terminado"));
catologo.agregarKata(new Kata("PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3, "no terminado"));
catologo.agregarKata(new Kata("BowlingScore", "Create a program that takes in an array of rolls and calculates the total score of a 10-pin bowling game including frames, spares, and strikes.", 2, "no terminado"));
catologo.agregarKata(new Kata("CoinChange", "Design a function that computes the minimum number of coins required to make a certain amount of change given an array of coin denominations.", 4, "no terminado"));
catologo.agregarKata(new Kata("StringCalculator", "Design a calculator that can add numbers based on a given comma-separated string input. Handle potential exceptions and edge cases.", 1, "no terminado"));
catologo.agregarKata(new Kata("PalindromeCheck", "Write a function that checks if a given string (ignoring spaces, punctuation, and capitalization) is a palindrome.", 1, "no terminado"));
catologo.agregarKata(new Kata("LongestSubarraySum", "Implement a function that finds and returns the length of the longest subarray in an array of integers that has a specified sum.", 3, "no terminado"));
catologo.agregarKata(new Kata("AnagramDetection", "Create a program that determines if two provided strings are anagrams of each other, disregarding spaces and capitalization.", 2, "no terminado"));
catologo.agregarKata(new Kata("BinarySearchTree", "Implement a binary search tree from scratch with functionalities for insertion, search, deletion, and in-order traversal.", 3, "no terminado"));
catologo.agregarKata(new Kata("MaxPathSum", "Given a binary tree, find the path that gives the maximum sum. The path may start and end at any node in the tree.", 5, "no terminado"));
catologo.agregarKata(new Kata("ShortestPathMaze", "Given a 2D grid representing a maze, find the shortest path from a start point to an endpoint, if it exists.", 5, "no terminado"));
catologo.agregarKata(new Kata("KnightTour", "Determine a sequence of moves for a knight on a chessboard such that it visits every square exactly once.", 5, "no terminado"));
catologo.agregarKata(new Kata("KnapsackProblem", "Given an array of items with specific weights and values, determine the combination of items to include in a knapsack of fixed capacity to achieve the maximum total value.", 3, "no terminado"));
catologo.agregarKata(new Kata("JobScheduling", "Given an array of jobs with start times, end times, and profits, find the maximum profit obtainable by scheduling non-overlapping jobs.", 3, "no terminado"));
catologo.agregarKata(new Kata("EditDistance", "Determine the minimum number of edit operations (insertions, deletions, substitutions) required to transform one string into another.", 4, "no terminado"));
catologo.agregarKata(new Kata("BalancedBrackets", "Given a string containing characters '{', '}', '(', ')', '[', and ']', determine if the input string's brackets are balanced.", 2, "no terminado"));
catologo.agregarKata(new Kata("CycleDetection", "Implement a function to detect if a cycle exists in a directed graph.", 3, "no terminado"));
catologo.agregarKata(new Kata("LongestPalindromeSubstring", "Design a function to find and return the longest palindromic substring from a given input string.", 4, "no terminado"));
catologo.agregarKata(new Kata("PowerSet", "Given a set of distinct integers, generate all possible subsets (power set) of it.", 3, "no terminado"));
catologo.agregarKata(new Kata("MaxFlowNetwork", "Given a graph representing a flow network, implement the Ford-Fulkerson algorithm to compute the maximum flow.", 5, "no terminado"));



form.addEventListener("submit", (event) => {
  div.innerHTML = " ";
  event.preventDefault();

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  let headerRow = document.createElement("tr");
  ["Título", "Descripción", "Ver más", "Dificultad", "Estado"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  let katas = catologo.obtenerListaKatasOrdTituloAsc();
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

      let stateCell = document.createElement("td");
      stateCell.textContent = katas[kataIndex].obtenerEstado();
      row.appendChild(stateCell);

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
  ["Título", "Descripción", "Acción", "Dificultad", "Estado"].forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const terminoDeBusqueda = document.querySelector("#search_box").value;
  let katas = catologo.buscarKataPorEstado(terminoDeBusqueda);
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

      let stateCell = document.createElement("td");
      stateCell.textContent = katas[kataIndex].obtenerEstado();
      row.appendChild(stateCell);

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