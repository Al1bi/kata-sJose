describe("Catalogo", () => {
  it("Se deberia mostrar la kata AnagramDetection en la primera fila de la tabla", () => {
    cy.visit("/");
    cy.get("#show_result").find("td").eq(0).should("contain", "AnagramDetection");
    cy.get("#show_result").find("td").eq(1).should("contain", "Create a program that determines if two provided strings are anagrams of each other, disregarding spaces and capitalization.");
    cy.get("#show_result").find("td").eq(3).should("contain", "2");
  });

  it("Se deberia mostrar el resultado Balanced Brackets al momento de Buscar Balanced y apretar enter en la barra de busqueda", () =>{
    cy.visit("/");
    cy.get("#search_form").find("input").type("BalancedBrackets{Enter}");
    cy.get("#show_result").find("td").eq(0).should("contain", "BalancedBrackets");
    cy.get("#show_result").find("td").eq(1).should("contain", "Given a string containing characters '{', '}', '(', ')', '[', and ']', determine if the input string's brackets are balanced.");
    cy.get("#show_result").find("td").eq(3).should("contain", "2");
  });

  it("Se deberia abrir una nueva pagina cuando se presiona el boton leer mas en la kata FizzBuzz y se deberia visualizar datos de esa kata ", () => {
    cy.visit("/");
    cy.get("#detalle_button0").click();
    cy.url().should("include", "/detalleKata.html?indexKata=0");
    cy.get("#titulo_detalle_div").should("contain", "FizzBuzz");
    cy.get("#descripcion_detalle_div").should("contain", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.");
  });

  it("Se deberia mostrar una kata con dificultad 1 al principio cuando se ordena el catalogo por dificultad ascendente", () =>
  {
    cy.visit("/");
    cy.get("#order_attribute").select("Dificultad Asc");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(3).should("contain", "1");
  });

  it("Se deberia mostrar una kata que pertenece a la categoria Fundamentos", () =>
  {
    cy.visit("/");
    cy.get("#category_attribute").select("Fundamentos");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(4).should("contain", "Fundamentos");
  });

  it("Se deberia mostrar una lista de katas de dificultad 5 al buscar katas por dificultad", () =>
  {
    cy.visit("/");
    cy.get("#difficulty_attribute").select("5");
    cy.get("#filter_difficulty_button").click();
    cy.get("#show_result").find("td").eq(3).should("contain", "5");
  });

  it("Se deberia mostrar una kata que tiene una solucion", () =>
  {
    cy.visit("/");
    cy.get("#solution_atribute").select("Fundamentos");
    cy.get("#filter_with_solution").click();
    cy.get("#show_result").find("td").eq(5).should("contain", "Si");
  });

});
