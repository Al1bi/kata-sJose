import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

const titulo_detalle_div = document.querySelector("#titulo_detalle_div");
const descripcion_detalle_div = document.querySelector("#descripcion_detalle_div");

let params = new URLSearchParams(window.location.search);
let indexKata = params.get('indexKata');

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



let katas = catologo.obtenerListaKatas();

descripcion_detalle_div.className = "see_more";
titulo_detalle_div.innerHTML += katas[indexKata].obtenerTitulo();
descripcion_detalle_div.innerHTML += katas[indexKata].obtenerDescripcion();
