import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";
import Singleton from "./Singleton.js";

describe("Katas Individuales ", () => {
  it("Deberia obtener el titulo de una kata", () => {
    let kata = new Kata("Jose"); 
    expect(kata.obtenerTitulo()).toEqual("Jose");
  });

  it("Deberia obtener una lista de titulos de katas de una sola kata", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    expect(catologo.obtenerListaTitulos()).toEqual(["Joselito"]);
  });

  it("Deberia obtener una lista de titulos de katas de varias katas", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.obtenerListaTitulos()).toEqual(["Joselito", "Borisaurio", "Maquinolas"]);
  });

  it("Deberia obtener una descripcion de kata", () => {
    let kata = new Kata("Jose", "Kata dijsktra"); 
    expect(kata.obtenerDescripcion()).toEqual("Kata dijsktra");
  });

  it("Deberia obtener una lista con el titulo e informacion adicional de la kata ", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito", "Tener cuidado al desarrollar esta kata")); 
    expect(catologo.obtenerListaKatas()).toEqual([{"descripcion": "Tener cuidado al desarrollar esta kata","titulo": "Joselito"}]);
  });
  
  it("Deberia devolver la dificultad de una kata en la escala de 5", () => {
    let kata = new Kata("Jose", "Katita", 5);
    expect(kata.obtenerDificultad()).toEqual(5);
  });

  it("Deberia obtener una lista de una kata por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual({"descripcion": "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", "dificultad": 1, "titulo": "FizzBuzz"});
  });

  it("Deberia obtener una lista de dos katas por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual({"descripcion": "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", "dificultad": 1, "titulo": "FizzBuzz"}, {"descripcion": "PrimeFactors", "titulo":"Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", "dificultad":3});
  });

});

