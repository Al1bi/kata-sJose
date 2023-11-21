import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

describe("Ordenamiento de katas", () => {
  it("Deberia obtener una lista de titulos de katas de una sola ordenada ascendentemente", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Denilson")); 
    expect(catologo.obtenerListaTitulosOrdenadaAsc()).toEqual(["Denilson"]);
  });
  
  it("Deberia obtener una lista de titulos de katas de varias katas ordenadas ascendentemente", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.obtenerListaTitulosOrdenadaAsc()).toEqual([ "Borisaurio", "Joselito", "Maquinolas"]);
  });

  it("Deberia obtener una lista de katas ordenadas por titulo  ascendentemente", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata("Joselito")); 
    catalogo.agregarKata(new Kata("Borisaurio")); 
    catalogo.agregarKata(new Kata("Maquinolas"));

    expect(catalogo.obtenerListaKatasOrdTituloAsc()).toEqual([new Kata("Borisaurio"), new Kata("Joselito"), new Kata("Maquinolas")]);
  });

  it("Deberia obtener una lista de una sola kata ordenada por la dificultad", () => {
    let catalogo = new Catologo();
    catalogo.agregarKata(new Kata("Joselito", "", 1)); 

    expect(catalogo.obtenerKatasOrdenadasPorDificultadAsc()).toEqual([new Kata("Joselito", "", 1)]);
  });
});