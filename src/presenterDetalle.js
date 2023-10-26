import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const form = document.querySelector("#request");
const titulo_detalle_div = document.querySelector("#titulo_detalle_div");
const descripcion_detalle_div = document.querySelector("#descripcion_detalle_div");
const estado_div = document.querySelector("#estado");
const searchForm = document.querySelector("#search_form");
const div = document.querySelector("#show_result");



let params = new URLSearchParams(window.location.search);
let indexKata = params.get('indexKata');

let catologo = new Catologo(); 

catologo.agregarKata(new Kata("FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1));
catologo.agregarKata(new Kata("PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3));
catologo.agregarKata(new Kata("BowlingScore", "Create a program that takes in an array of rolls and calculates the total score of a 10-pin bowling game including frames, spares, and strikes.", 2));
catologo.agregarKata(new Kata("CoinChange", "Design a function that computes the minimum number of coins required to make a certain amount of change given an array of coin denominations.", 4));
catologo.agregarKata(new Kata("StringCalculator", "Design a calculator that can add numbers based on a given comma-separated string input. Handle potential exceptions and edge cases.", 1));
catologo.agregarKata(new Kata("PalindromeCheck", "Write a function that checks if a given string (ignoring spaces, punctuation, and capitalization) is a palindrome.", 1));
catologo.agregarKata(new Kata("LongestSubarraySum", "Implement a function that finds and returns the length of the longest subarray in an array of integers that has a specified sum.", 3));
catologo.agregarKata(new Kata("AnagramDetection", "Create a program that determines if two provided strings are anagrams of each other, disregarding spaces and capitalization.", 2));
catologo.agregarKata(new Kata("BinarySearchTree", "Implement a binary search tree from scratch with functionalities for insertion, search, deletion, and in-order traversal.", 3));
catologo.agregarKata(new Kata("MaxPathSum", "Given a binary tree, find the path that gives the maximum sum. The path may start and end at any node in the tree.", 5));
catologo.agregarKata(new Kata("ShortestPathMaze", "Given a 2D grid representing a maze, find the shortest path from a start point to an endpoint, if it exists.", 5));
catologo.agregarKata(new Kata("KnightTour", "Determine a sequence of moves for a knight on a chessboard such that it visits every square exactly once.", 5));
catologo.agregarKata(new Kata("KnapsackProblem", "Given an array of items with specific weights and values, determine the combination of items to include in a knapsack of fixed capacity to achieve the maximum total value.", 3));
catologo.agregarKata(new Kata("JobScheduling", "Given an array of jobs with start times, end times, and profits, find the maximum profit obtainable by scheduling non-overlapping jobs.", 3));
catologo.agregarKata(new Kata("EditDistance", "Determine the minimum number of edit operations (insertions, deletions, substitutions) required to transform one string into another.", 4));
catologo.agregarKata(new Kata("BalancedBrackets", "Given a string containing characters '{', '}', '(', ')', '[', and ']', determine if the input string's brackets are balanced.", 2));
catologo.agregarKata(new Kata("CycleDetection", "Implement a function to detect if a cycle exists in a directed graph.", 3));
catologo.agregarKata(new Kata("LongestPalindromeSubstring", "Design a function to find and return the longest palindromic substring from a given input string.", 4));
catologo.agregarKata(new Kata("PowerSet", "Given a set of distinct integers, generate all possible subsets (power set) of it.", 3));
catologo.agregarKata(new Kata("MaxFlowNetwork", "Given a graph representing a flow network, implement the Ford-Fulkerson algorithm to compute the maximum flow.", 5));




let katas = catologo.obtenerListaKatas();

descripcion_detalle_div.className = "see_more";
titulo_detalle_div.innerHTML += katas[indexKata].obtenerTitulo();
descripcion_detalle_div.innerHTML += katas[indexKata].obtenerDescripcion();
estado_div.innerHTML += katas[indexKata].obtenerEstado();


searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nuevoEstado = document.querySelector("#search_box").value;
    katas[indexKata].modificarEstado(nuevoEstado);

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
  
        let row = document.createElement("tr");
  
        let titleCell = document.createElement("td");
        titleCell.textContent = katas[indexKata].obtenerTitulo();
        row.appendChild(titleCell);
  
        let descriptionCell = document.createElement("td");
        descriptionCell.textContent = katas[indexKata].obtenerDescripcion();
        row.appendChild(descriptionCell);
  
        let inputCell = document.createElement("td");
        let inputElement = document.createElement("input");
        inputElement.type = "submit";
        inputElement.className = "see_more";
        inputElement.value = "Leer mas";
        inputElement.id = "detalle_button" + indexKata;
        inputCell.appendChild(inputElement);
        row.appendChild(inputCell);
        let difficultyCell = document.createElement("td");
        difficultyCell.textContent = katas[indexKata].obtenerDificultad();
        row.appendChild(difficultyCell);
  
        let stateCell = document.createElement("td");
        stateCell.textContent = katas[indexKata].obtenerEstado();
        row.appendChild(stateCell);

  
        tbody.appendChild(row);
    
    table.appendChild(tbody);
  
    div.appendChild(table);
  });

