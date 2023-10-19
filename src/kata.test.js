import Kata from "./Kata.js";

describe(" Katas Individuales ", () => {

  it("Deberia obtener el titulo de una kata", () => {
    
    let kata = new Kata("Jose"); 

    expect(kata.obtenerTitulo()).toEqual("Jose");
  });

});
