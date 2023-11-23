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
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1, 'Fundamentos', "tengo solucion", "Joselito", "2020-01-15"));
  });

  it("Deberia obtener una lista de dos katas por defecto", () => {
    let catalogo = Singleton.getInstance();
    expect(catalogo.katas[0]).toEqual(new Kata(0,"FizzBuzz", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.", 1, 'Fundamentos', "tengo solucion", 'Joselito', "2020-01-15"), 
                                      new Kata(1,"PrimeFactors", "Develop a function that computes and returns the prime factorization of a given number in the form of an array of numbers.", 3));
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
  it("Deberia comparar entre dos fechas y se devuelve false si la kata comparada es mayor",() => {
    let kataEjemplo = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    let kataEjemplo_2 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2001-07-01");
    let resultadoComparacion = kataEjemplo.compararFechaMayor(kataEjemplo_2);
    expect(resultadoComparacion).toEqual(false);
  });

  it("Deberia comparar entre dos fechas y se devuelve true si la kata comparada es menor",() => {
    let kataEjemplo = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    let kataEjemplo_2 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2001-07-01");
    let resultadoComparacion = kataEjemplo_2.compararFechaMayor(kataEjemplo);
    expect(resultadoComparacion).toEqual(true);
  });

  it("Deberia comparar entre dos fechas y se devuelve true si la kata comparada es mayor",() => {
    let kataEjemplo = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    let kataEjemplo_2 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2001-07-01");
    let resultadoComparacion = kataEjemplo.compararFechaMenor(kataEjemplo_2);
    expect(resultadoComparacion).toEqual(true);
  });

  it("Deberia comparar entre dos fechas y se devuelve false si la kata comparada es menor",() => {
    let kataEjemplo = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2000-07-01");
    let kataEjemplo_2 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2001-07-01");
    let resultadoComparacion = kataEjemplo_2.compararFechaMenor(kataEjemplo);
    expect(resultadoComparacion).toEqual(false);
  });
  it("Debería comparar correctamente dos katas basándose en sus fechas de creación", () => {
    let catologo = new Catologo();
    let kata1 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
    let kata2 = new Kata(2, "Kata2", "Desc2", 1, "Cat2", "url2", "Autor2", "2001-01-01");
    catologo.agregarKata(kata1);
    catologo.agregarKata(kata2);
    expect(catologo.compararFechas(kata1, kata2, 1)).toBe(1); 
});
it("Debería comparar correctamente dos katas basándose en sus fechas de creación, se retorna -1 si la k2 es antes de k1", () => {
  let catologo = new Catologo();
  let kata1 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
  let kata2 = new Kata(2, "Kata2", "Desc2", 1, "Cat2", "url2", "Autor2", "2001-01-01");
  catologo.agregarKata(kata1);
  catologo.agregarKata(kata2);
  expect(catologo.compararFechas(kata2, kata1, 1)).toBe(-1); 
});
it("Debería comparar correctamente dos katas basándose en sus fechas de creación, se retorna 0 si la k2 es al mismo tiempo de k1", () => {
  let catologo = new Catologo();
  let kata1 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
  let kata2 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
  catologo.agregarKata(kata1);
  catologo.agregarKata(kata2);
  expect(catologo.compararFechas(kata1, kata2, 1)).toBe(0); 
});
it("Deberia ordenar la lista de katas ascendentemente",() => {
  let fechaResultado = "2001-07-01";
  let catologo = new Catologo(); 
  catologo.agregarKata(new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2008-07-01")); 
  catologo.agregarKata(new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Von Linus", "2001-07-01")); 
  var ordenado = catologo.ordenarPorFechaDeCreacionAscendentemente();
  expect(ordenado[0].obtenerFechaCreacion()).toEqual(fechaResultado);
});

it("Deberia ordenar la lista de katas descendentemente",() => {
  let fechaResultado = "2008-07-01";
  let catologo = new Catologo(); 
  catologo.agregarKata(new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2008-07-01")); 
  catologo.agregarKata(new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Von Linus", "2001-07-01")); 
  var ordenado = catologo.ordenarPorFechaDeCreacionDescendentemente();
  expect(ordenado[0].obtenerFechaCreacion()).toEqual(fechaResultado);
});

it("deberia devolver -1 si el autor de la kata 1 esta antes que el autor en la kata 2",() => {
  let catologo = new Catologo(); 
  let kata1 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2008-07-01"); 
  let kata2 = new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Von Linus", "2001-07-01"); 
  expect(catologo.compararAutores(kata1, kata2)).toBe(-1);
});
it("deberia devolver 1 si el autor de la kata 1 esta despues que el autor en la kata 2",() => {
  let catologo = new Catologo(); 
  let kata1 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Von Linus", "2008-07-01"); 
  let kata2 = new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Linus", "2001-07-01"); 
  expect(catologo.compararAutores(kata1, kata2)).toBe(1);
});
it("deberia devolver 0 si ambos autores tienen el mismo nombre",() => {
  let catologo = new Catologo(); 
  let kata1 = new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Linus", "2008-07-01"); 
  let kata2 = new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Linus", "2001-07-01"); 
  expect(catologo.compararAutores(kata1, kata2)).toBe(0);
});
it("Deberia ordenar la lista de katas por el autor Descendentemente",() => {
  let nombreEsperado = "Albion";
  let catologo = new Catologo(); 
  catologo.agregarKata(new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Bonancio", "2008-07-01")); 
  catologo.agregarKata(new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Albion", "2001-07-01")); 
  var ordenado = catologo.ordenarPorAutorDescendentemente();
  expect(ordenado[0].obtenerAutor()).toEqual(nombreEsperado);
});

it("Deberia ordenar la lista de katas por el autor Ascendentemente",() => {
  let nombreEsperado = "Bonancio";
  let catologo = new Catologo(); 
  catologo.agregarKata(new Kata(0, "kata", "Kata de ejemplo", 1, "Algoritmos", "miUrl", "Bonancio", "2008-07-01")); 
  catologo.agregarKata(new Kata(1, "kata2", "Kata de ejemplo2", 1, "Algoritmos", "miUrl2", "Albion", "2001-07-01")); 
  var ordenado = catologo.ordenarPorAutorAscendentemente();
  expect(ordenado[0].obtenerAutor()).toEqual(nombreEsperado);
});


});

