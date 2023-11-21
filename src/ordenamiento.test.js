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
    catalogo.agregarKata(new Kata("Joselito", "", 1)); 

    expect(catalogo.obtenerKatasOrdenadasPorDificultadAsc()).toEqual([new Kata("Joselito", "", 1)]);
  });

  it("Deberia obtener una lista de katas ordenadas por dificultad ascendentemente", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata("Joselito", "", 3)); 
    catalogo.agregarKata(new Kata("Borisaurio", "", 2)); 
    catalogo.agregarKata(new Kata("Maquinolas", "", 1));

    expect(catalogo.obtenerKatasOrdenadasPorDificultadAsc()).toEqual([new Kata("Maquinolas", "", 1), new Kata("Borisaurio", "", 2), new Kata("Joselito", "", 3)]);
  });
});