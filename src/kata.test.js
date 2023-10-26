import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

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
  it("Deberia devolver la lista de todas las katas al buscar con una cadena vacia", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("Joselito", "Descrip")); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata("Maquinolas")); 

    expect(catologo.buscarKata("")).toEqual(catologo.obtenerListaKatas());
  });
  it("Deberia devolver la dificultad de una kata en la escala de 5", () => {
    let kata = new Kata("Jose", "Katita", 5);
    expect(kata.obtenerDificultad()).toEqual(5);
  });
  it("Deberia devolver una kata de dificultad 5", () => {
    let catologo = new Catologo(); 
    let kata = new Kata("Jose", "Katita", 5);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(5)).toEqual([kata]);
  });
  it("Deberia devolver una kata de dificultad 4", () => {
    let catologo = new Catologo(); 
    let kata = new Kata("Jose", "Katita", 4);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(4)).toEqual([kata]);
  });
  it("Deberia devolver una kata de dificultad 3", () => {
    let catologo = new Catologo(); 
    let kata = new Kata("Jose", "Katita", 3);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(3)).toEqual([kata]);
  });
  it("Deberia devolver una lista katas de dificultad 1", () => {
    let catologo = new Catologo(); 
    let catologo1 = new Catologo();
    catologo.agregarKata(new Kata("Jose", "Katita", 1));
    catologo.agregarKata(new Kata("Kata 2", "Katita", 1));
    catologo.agregarKata(new Kata("Kata 3", "Katita", 1));
    catologo1.agregarKata(new Kata("Jose", "Katita", 1));
    catologo1.agregarKata(new Kata("Kata 2", "Katita", 1));
    catologo1.agregarKata(new Kata("Kata 3", "Katita", 1));
    catologo1.agregarKata(new Kata("Kata 2", "Katita", 2));
    catologo1.agregarKata(new Kata("Kata 3", "Katita", 3));
    expect(catologo1.buscarKataPorDificultad(1)).toEqual(catologo.obtenerListaKatas());
  });

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

  it("Deberia retornar al preguntar por el estado de una kata no terminada", () => {

    let testKata = new Kata("KataBasic", "Esta es la kata basica para el test", 1, false); 

    expect(testKata.obtenerEstado()).toEqual(false);
  });

  it("Deberia retornar true al preguntar por el estado de una kata terminada", () => {

    let testKata = new Kata("KataBasic", "Esta es la kata basica para el test", 2, true); 

    expect(testKata.obtenerEstado()).toEqual(true);
  });

  it("Deberia devolver una lista de una sola kata que esta terminada", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("KataBasic", "Esta es la kata basica para el test", 1, false)); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip", 2, true)); 

    expect(catologo.buscarKatasTerminadas()).toEqual([new Kata("Borisaurio", "Descrip", 2, true)]);
  });

  it("Deberia devolver una lista de varias katas que estan terminadas", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("KataBasic", "Esta es la kata basica para el test", 1, false)); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip", 2, true)); 
    catologo.agregarKata(new Kata("katalan numbers", "katalan numbers la serie", 3, true)); 

    expect(catologo.buscarKatasTerminadas()).toEqual([new Kata("Borisaurio", "Descrip", 2, true), 
                                                      new Kata("katalan numbers", "katalan numbers la serie", 3, true)]);
  });

  it("Deberia devolver una lista de una sola kata que esta no esta terminada", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata("KataBasic", "Esta es la kata basica para el test", 1, false)); 
    catologo.agregarKata(new Kata("Borisaurio", "Descrip", 2, true)); 

    expect(catologo.buscarKatasNoTerminadas()).toEqual([new Kata("KataBasic", "Esta es la kata basica para el test", 1, false)]);
  });
});             