import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";
import Singleton from "./Singleton.js";

describe("Katas Individuales ", () => {
  it("Deberia obtener el titulo de una kata", () => {
    let kata = new Kata(0,"Jose"); 
    expect(kata.obtenerTitulo()).toEqual("Jose");
  });

  it("Deberia obtener una lista de titulos de katas de una sola kata", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito")); 
    expect(catologo.obtenerListaTitulos()).toEqual(["Joselito"]);
  });

  it("Deberia obtener una lista de titulos de katas de varias katas", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0, "Joselito")); 
    catologo.agregarKata(new Kata(0, "Borisaurio")); 
    catologo.agregarKata(new Kata(0, "Maquinolas")); 

    expect(catologo.obtenerListaTitulos()).toEqual(["Joselito", "Borisaurio", "Maquinolas"]);
  });

  it("Deberia obtener una descripcion de kata", () => {
    let kata = new Kata(0,"Jose", "Kata dijsktra"); 
    expect(kata.obtenerDescripcion()).toEqual("Kata dijsktra");
  });

  it("Deberia obtener una lista con el titulo e informacion adicional de la kata ", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0, "Joselito", "Tener cuidado al desarrollar esta kata")); 
    expect(catologo.obtenerListaKatas()).toEqual([new Kata(0, "Joselito", "Tener cuidado al desarrollar esta kata")]);
  });
  
  it("Deberia devolver la dificultad de una kata en la escala de 5", () => {
    let kata = new Kata(0, "Jose", "Katita", 5);
    expect(kata.obtenerDificultad()).toEqual(5);
  });

  it("Deberia obtener una lista de una kata por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1));
  });

  it("Deberia obtener una lista de dos katas por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1), new Kata(1,"PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3));
  });

  it("Deberia obtener el id de una kata", () => {
    let kata = new Kata(0,"Katita"); 
    expect(kata.obtenerId()).toEqual(0);
  });
  
  it("Deberia obtener la categoria Fundamentos de una kata", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Fundamentos"); 
    expect(kata.obtenerCategoria()).toEqual("Fundamentos");
  });

  it("Deberia obtener la categoria Algoritmos de una kata", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos"); 
    expect(kata.obtenerCategoria()).toEqual("Algoritmos");
  });

});

