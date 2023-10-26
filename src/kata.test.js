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
    expect(catologo.obtenerListaKatas()).toEqual([{"descripcion": "Tener cuidado al desarrollar esta kata","dificultad":undefined, "estado":"no terminado", "titulo": "Joselito"}]);
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

  it("Deberia obtener el estado no terminado de una kata", () => {    
    let kata = new Kata("Kata 3", "Katita", 3, "no terminado"); 
    expect(kata.obtenerEstado()).toEqual("no terminado");
  });
  it("Deberia obtener una lista con un elemento kata no terminado", () => {    
    let kata = new Kata("Kata 3", "Katita", 3, "no terminado"); 
    let catalogo = new Catologo();
    catalogo.agregarKata(kata);
    expect(catalogo.buscarKataPorEstado("no terminado")).toEqual([kata]);
  });
  it("Deberia obtener una lista con un elemento kata terminado", () => {    
    let kata = new Kata("Kata 3", "Katita", 3, "terminado"); 
    let catalogo = new Catologo();
    catalogo.agregarKata(kata);
    expect(catalogo.buscarKataPorEstado("terminado")).toEqual([kata]);
  });

  it("Deberia obtener una lista con un katas terminadas", () => {    
    let catalogo = new Catologo();
    let catalogo1 = new Catologo();
    catalogo.agregarKata(new Kata("Kata 3", "Katita", 3, "terminado"));
    catalogo.agregarKata(new Kata("Kata 2", "Katita", 4, "terminado"));
    catalogo.agregarKata(new Kata("Kata 1", "Katita", 2, "terminado"));
    catalogo.agregarKata(new Kata("Kata 0", "Katita", 1, "terminado"));
    catalogo.agregarKata(new Kata("Kata -1", "Katita", 5, "terminado"));
    

    catalogo1.agregarKata(new Kata("Kata 3", "Katita", 3, "terminado"));
    catalogo1.agregarKata(new Kata("Kata 2", "Katita", 4, "terminado"));
    catalogo1.agregarKata(new Kata("Kata 1", "Katita", 2, "terminado"));
    catalogo1.agregarKata(new Kata("Kata 0", "Katita", 1, "terminado"));
    catalogo1.agregarKata(new Kata("Kata -1", "Katita", 5, "terminado"));
    catalogo1.agregarKata(new Kata("Kata extra", "Katita", 5, "no terminado"));

    expect(catalogo1.buscarKataPorEstado("terminado")).toEqual(catalogo.obtenerListaKatas());
  });
  it("Deberia retornar el estado por default una kata como no terminado", () => {    
    let kata = new Kata("Kata 3", "Katita", 3); 
    expect(kata.obtenerEstado()).toEqual("no terminado");
  });
  it("Deberia modificar ele stado de una kata de no terminado a terminado", () => {    
    let kata = new Kata("Kata 3", "Katita", 3);
    kata.modificarEstado("terminado"); 
    expect(kata.obtenerEstado()).toEqual("terminado");
  });
  


});

