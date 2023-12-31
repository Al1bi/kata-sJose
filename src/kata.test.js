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
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1, 'Fundamentos', "tengo solucion", "Joselito", "2020-01-15", true));
  });

  it("Deberia obtener una lista de dos katas por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1, 'Fundamentos', "tengo solucion", 'Joselito', "2020-01-15", true), 
                                      new Kata(1,"PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3, false));
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

  it("Deberia obtener el url de la solucion una kata", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos", "soy url"); 
    expect(kata.obtenerUrlSolucion()).toEqual("soy url");
  });

  it("Deberia verificar si la kata tiene solucion en una kata sin solucion", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos", ""); 
    expect(kata.tieneSolucion()).toEqual(false);
  });

  it("Deberia verificar si la kata tiene solucion en una kata sin solucion", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos", "tengo solucion"); 
    expect(kata.tieneSolucion()).toEqual(true);
  });

  it("Deberia verificar si la kata tiene solucion en una kata sin solucion creada sin su parametro correspondiente", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos"); 
    expect(kata.tieneSolucion()).toEqual(false);
  });

  it("Deberia obtener el autor de una kata", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos", "soy url", 'Joselito'); 
    expect(kata.obtenerAutor()).toEqual("Joselito");
  });

  it("Deberia obtener el autor de una kata que tiene como autor Almejandro", () => {
    let kata = new Kata(0,"Katita", "Idk", 1, "Algoritmos", "soy url", 'Almejandro'); 
    expect(kata.obtenerAutor()).toEqual("Almejandro");
  });

  it("Deberia obtener la fecha de creacion de la kata", () => {
    let fechaDeCreacion = "2000-07-01";
    let kata = new Kata(0, "Kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    expect(kata.obtenerFechaCreacion()).toEqual(fechaDeCreacion);
  });

  it("Deberia devolver la lista de elementos de la fecha", () => {
    let kata = new Kata(0, "Kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    var elementos = kata.descomponerFecha()
    expect(elementos).toEqual([2000, 7, 1]); 
  });

  it("Deberia obtener estado(resuelto o no) de una kata", () => {
    let kata = new Kata(0, "Kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01", false);
    expect(kata.obtenerEstadoResuelto()).toEqual(false);
  });

  it("Deberia verficar si la kata esta resuelta", () => {
    let kata = new Kata(0, "Kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01", true);
    expect(kata.estaResuelta()).toEqual(true);
  });

});

