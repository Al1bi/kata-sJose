import Catalogo from "./Catalogo.js";
import Kata from "./Kata.js";

const Singleton = (function() {
    let instance;
    function createInstance() {
        let catalogo = new Catalogo();
        catalogo.agregarKata(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1));
        catalogo.agregarKata(new Kata(1,"PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3));
        catalogo.agregarKata(new Kata(2,"BowlingScore", "Create a program that takes in an array of rolls and calculates the total score of a 10-pin bowling game including frames, spares, and strikes.", 2));
        catalogo.agregarKata(new Kata(3,"CoinChange", "Design a function that computes the minimum number of coins required to make a certain amount of change given an array of coin denominations.", 4));
        catalogo.agregarKata(new Kata(4,"StringCalculator", "Design a calculator that can add numbers based on a given comma-separated string input. Handle potential exceptions and edge cases.", 1));
        catalogo.agregarKata(new Kata(5,"PalindromeCheck", "Write a function that checks if a given string (ignoring spaces, punctuation, and capitalization) is a palindrome.", 1));
        catalogo.agregarKata(new Kata(6,"LongestSubarraySum", "Implement a function that finds and returns the length of the longest subarray in an array of integers that has a specified sum.", 3));
        catalogo.agregarKata(new Kata(7,"AnagramDetection", "Create a program that determines if two provided strings are anagrams of each other, disregarding spaces and capitalization.", 2));
        catalogo.agregarKata(new Kata(8,"BinarySearchTree", "Implement a binary search tree from scratch with functionalities for insertion, search, deletion, and in-order traversal.", 3));
        catalogo.agregarKata(new Kata(9,"MaxPathSum", "Given a binary tree, find the path that gives the maximum sum. The path may start and end at any node in the tree.", 5));
        catalogo.agregarKata(new Kata(10,"ShortestPathMaze", "Given a 2D grid representing a maze, find the shortest path from a start point to an endpoint, if it exists.", 5, "Algoritmos"));
        catalogo.agregarKata(new Kata(11,"KnightTour", "Determine a sequence of moves for a knight on a chessboard such that it visits every square exactly once.", 5));
        catalogo.agregarKata(new Kata(12,"KnapsackProblem", "Given an array of items with specific weights and values, determine the combination of items to include in a knapsack of fixed capacity to achieve the maximum total value.", 3));
        catalogo.agregarKata(new Kata(13,"JobScheduling", "Given an array of jobs with start times, end times, and profits, find the maximum profit obtainable by scheduling non-overlapping jobs.", 3, "Algoritmos"));
        catalogo.agregarKata(new Kata(14,"EditDistance", "Determine the minimum number of edit operations (insertions, deletions, substitutions) required to transform one string into another.", 4));
        catalogo.agregarKata(new Kata(15,"BalancedBrackets", "Given a string containing characters '{', '}', '(', ')', '[', and ']', determine if the input string's brackets are balanced.", 2));
        catalogo.agregarKata(new Kata(16,"CycleDetection", "Implement a function to detect if a cycle exists in a directed graph.", 3, "Fundamentos"));
        catalogo.agregarKata(new Kata(17,"LongestPalindromeSubstring", "Design a function to find and return the longest palindromic substring from a given input string.", 4));
        catalogo.agregarKata(new Kata(18,"PowerSet", "Given a set of distinct integers, generate all possible subsets (power set) of it.", 3));
        catalogo.agregarKata(new Kata(19,"MaxFlowNetwork", "Given a graph representing a flow network, implement the Ford-Fulkerson algorithm to compute the maximum flow.", 5, 'Fundamentos'));
        catalogo.obtenerListaKatas();
        return catalogo;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
export default Singleton;