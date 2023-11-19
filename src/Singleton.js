

const Singleton = (function(){

    let katas = [
        {"titulo": "FizzBuzz", "descripcion": "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", "dificultad": 1}
    ];
    return {
        getInstance: function() {
            return katas;
        }
    };

})();

export default Singleton;