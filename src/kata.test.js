import Kata from "./Kata.js";
import Catologo from "./Catalogo.js";

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

  it("Deberia devolver una lista de los titulos de las katas que empiecen por J", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarTitulo("J")).toEqual(["Joselito"]);
  });
  it("Deberia devolver una lista de los titulos de las katas que empiecen por B", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarTitulo("B")).toEqual(["Borisaurio"]);
  });
  ; 
  it("Deberia devolver una lista de los titulos de las katas que empiecen por la palabra maqui", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarTitulo("maqui")).toEqual(["Maquinolas"]);
  });
  
  it("Deberia devolver una lista de katas cuyos titulos empiezen por la palabra Bori", () => {
    let catologo = new Catologo(); 
    let borisaurioKata = new Kata("Borisaurio", "Descrip"); 
    catologo.agregarKata(new Kata("Joselito")); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarKata("Bori")).toEqual([borisaurioKata]);
  });

  it("Deberia devolver una lista de katas cuyos titulos empiezen por la palabra Jose", () => {
    let catologo = new Catologo(); 
    let searchedKata = new Kata("Joselito", "Descrip"); 
    catologo.agregarKata(new Kata("Joselito", "Descrip")); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarKata("Jose")).toEqual([searchedKata]);
  });
});

