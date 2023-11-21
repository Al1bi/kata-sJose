import Catologo from "./Catalogo.js";
import Kata from "./Kata.js";

describe("Busqueda de Katas", () => {

  it("Deberia devolver una lista de los titulos de las katas que empiecen por J", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito")); 
    catologo.agregarKata(new Kata(1,"Borisaurio")); 
    catologo.agregarKata(new Kata(2,"Maquinolas")); 

    expect(catologo.buscarTitulo("J")).toEqual(["Joselito"]);
  });
  
  it("Deberia devolver una lista de los titulos de las katas que empiecen por B", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito")); 
    catologo.agregarKata(new Kata(1,"Borisaurio")); 
    catologo.agregarKata(new Kata(2,"Maquinolas")); 

    expect(catologo.buscarTitulo("B")).toEqual(["Borisaurio"]);
  });
   
  it("Deberia devolver una lista de los titulos de las katas que empiecen por la palabra maqui", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito")); 
    catologo.agregarKata(new Kata(1,"Borisaurio")); 
    catologo.agregarKata(new Kata(2,"Maquinolas")); 

    expect(catologo.buscarTitulo("maqui")).toEqual(["Maquinolas"]);
  });
  
  it("Deberia devolver una lista de katas cuyos titulos empiezen por la palabra Bori", () => {
    let catologo = new Catologo(); 
    let borisaurioKata = new Kata(2,"Borisaurio", "Descrip"); 
    catologo.agregarKata(new Kata(1,"Joselito")); 
    catologo.agregarKata(new Kata(2,"Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata(3,"Maquinolas")); 

    expect(catologo.buscarKata("Bori")).toEqual([borisaurioKata]);
  });

  it("Deberia devolver una lista de katas cuyos titulos empiezen por la palabra Jose", () => {
    let catologo = new Catologo(); 
    let searchedKata = new Kata(1,"Joselito", "Descrip"); 
    catologo.agregarKata(new Kata(1,"Joselito", "Descrip")); 
    catologo.agregarKata(new Kata(2,"Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata(3,"Maquinolas")); 

    expect(catologo.buscarKata("Jose")).toEqual([searchedKata]);
  });

  it("Deberia devolver la lista de todas las katas al buscar con una cadena vacia", () => {
    let catologo = new Catologo(); 
    catologo.agregarKata(new Kata(0,"Joselito", "Descrip")); 
    catologo.agregarKata(new Kata(1,"Borisaurio", "Descrip")); 
    catologo.agregarKata(new Kata(2,"Maquinolas")); 

    expect(catologo.buscarKata("")).toEqual(catologo.obtenerListaKatas());
  });

  it("Deberia devolver una kata de dificultad 5", () => {
    let catologo = new Catologo(); 
    let kata = new Kata(0,"Jose", "Katita", 5);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(5)).toEqual([kata]);
  });

  it("Deberia devolver una kata de dificultad 4", () => {
    let catologo = new Catologo(); 
    let kata = new Kata(0,"Jose", "Katita", 4);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(4)).toEqual([kata]);
  });

  it("Deberia devolver una kata de dificultad 3", () => {
    let catologo = new Catologo(); 
    let kata = new Kata(0,"Jose", "Katita", 3);
    catologo.agregarKata(kata);
    expect(catologo.buscarKataPorDificultad(3)).toEqual([kata]);
  });

  it("Deberia devolver una lista katas de dificultad 1", () => {
    let catologoEsperado = new Catologo(); 
    let catologo = new Catologo();
    catologoEsperado.agregarKata(new Kata(0,"Jose", "Katita", 1));
    catologoEsperado.agregarKata(new Kata(1,"Kata 2", "Katita", 1));
    catologoEsperado.agregarKata(new Kata(2,"Kata 3", "Katita", 1));
    catologo.agregarKata(new Kata(0,"Jose", "Katita", 1));
    catologo.agregarKata(new Kata(1,"Kata 2", "Katita", 1));
    catologo.agregarKata(new Kata(2,"Kata 3", "Katita", 1));
    catologo.agregarKata(new Kata(3,"Kata 2", "Katita", 2));
    catologo.agregarKata(new Kata(4,"Kata 3", "Katita", 3));
    expect(catologo.buscarKataPorDificultad(1)).toEqual(catologoEsperado.obtenerListaKatas());
  });

  it("Deberia devolver una lista katas que pertenezcan a la categoria Fundamentos", () => {
    let catologoEsperado = new Catologo(); 
    let catologo = new Catologo();
    catologoEsperado.agregarKata(new Kata(0,"Jose", "Katita", 1, 'Fundamentos'));
    catologoEsperado.agregarKata(new Kata(1,"Kata 2", "Katita", 1, 'Fundamentos'));
    catologoEsperado.agregarKata(new Kata(2,"Kata 3", "Katita", 1, 'Fundamentos'));
    catologo.agregarKata(new Kata(0,"Jose", "Katita", 1, 'Fundamentos'));
    catologo.agregarKata(new Kata(1,"Kata 2", "Katita", 1, 'Fundamentos'));
    catologo.agregarKata(new Kata(2,"Kata 3", "Katita", 1, 'Fundamentos'));
    catologo.agregarKata(new Kata(3,"Kata 2", "Katita", 2));
    catologo.agregarKata(new Kata(4,"Kata 3", "Katita", 3));
    expect(catologo.buscarKataPorCategoria('Fundamentos')).toEqual(catologoEsperado.obtenerListaKatas());
  });

});