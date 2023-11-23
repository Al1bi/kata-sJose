import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

describe("Ordenamiento de katas", () => {
  it("Deberia obtener una lista de titulos de katas de una sola ordenada ascendentemente", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0, "Denilson")); 
    expect(catologo.obtenerListaTitulosOrdenadaAsc()).toEqual(["Denilson"]);
  });
  
  it("Deberia obtener una lista de titulos de katas de varias katas ordenadas ascendentemente", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito")); 
    catologo.agregarKata(new Kata(1,"Borisaurio")); 
    catologo.agregarKata(new Kata(2,"Maquinolas")); 

    expect(catologo.obtenerListaTitulosOrdenadaAsc()).toEqual([ "Borisaurio", "Joselito", "Maquinolas"]);
  });

  it("Deberia obtener una lista de katas ordenadas por titulo  ascendentemente", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata(0,"Joselito")); 
    catalogo.agregarKata(new Kata(1,"Borisaurio")); 
    catalogo.agregarKata(new Kata(2,"Maquinolas"));

    expect(catalogo.obtenerListaKatasOrdTituloAsc()).toEqual([new Kata(1,"Borisaurio"), new Kata(0,"Joselito"), new Kata(2,"Maquinolas")]);
  });

  it("Deberia obtener una lista de una sola kata ordenada por la dificultad", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata(0, "Joselito", "", 1)); 

    expect(catalogo.obtenerKatasOrdenadasPorDificultadAsc()).toEqual([new Kata(0, "Joselito", "", 1)]);
  });

  it("Deberia obtener una lista de katas ordenadas por dificultad ascendentemente", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata(0,"Joselito", "", 3)); 
    catalogo.agregarKata(new Kata(1,"Borisaurio", "", 2)); 
    catalogo.agregarKata(new Kata(2,"Maquinolas", "", 1));

    expect(catalogo.obtenerKatasOrdenadasPorDificultadAsc()).toEqual([new Kata(2, "Maquinolas", "", 1), new Kata(1, "Borisaurio", "", 2), new Kata(0, "Joselito", "", 3)]);
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