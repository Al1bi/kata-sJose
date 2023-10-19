import Kata from "./Kata.js";
import Catologo from "./Catalogo.js";

describe(" Katas Individuales ", () => {
  it("Deberia obtener el titulo de una kata", () => {
    let kata = new Kata("Jose"); 
    expect(kata.obtenerTitulo()).toEqual("Jose");
  });

  it("Deberia obtener una lista de titulos de katas de una sola kata", () => {
    
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 

    expect(catologo.obtenerListaTitulos()).toEqual(["Joselito"]);
  });

});
