import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

describe("Busqueda de Katas", () => {

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

});