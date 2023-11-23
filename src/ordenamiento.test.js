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
    expect(catologo.compararFechas(kata1, kata2)).toBe(1); 
  });

  it("Debería comparar correctamente dos katas basándose en sus fechas de creación, se retorna -1 si la k2 es antes de k1", () => {
    let catologo = new Catologo();
    let kata1 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
    let kata2 = new Kata(2, "Kata2", "Desc2", 1, "Cat2", "url2", "Autor2", "2001-01-01");
    catologo.agregarKata(kata1);
    catologo.agregarKata(kata2);
    expect(catologo.compararFechas(kata2, kata1)).toBe(-1); 
  });

  it("Debería comparar correctamente dos katas basándose en sus fechas de creación, se retorna 0 si la k2 es al mismo tiempo de k1", () => {
    let catologo = new Catologo();
    let kata1 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
    let kata2 = new Kata(1, "Kata1", "Desc1", 1, "Cat1", "url1", "Autor1", "2002-01-01");
    catologo.agregarKata(kata1);
    catologo.agregarKata(kata2);
    expect(catologo.compararFechas(kata1, kata2)).toBe(0); 
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
});