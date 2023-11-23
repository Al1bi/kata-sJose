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
    cy.url().should("include", "/detalleKata?indexKata=0");
    cy.get("#titulo_detalle_div").should("contain", "FizzBuzz");
    cy.get("#descripcion_detalle_div").should("contain", "Write a function that takes a number as an argument and returns an array of numbers up to the given number, but replaces numbers divisible by 3 with 'Fizz', numbers divisible by 5 with 'Buzz', and numbers divisible by both 3 and 5 with 'FizzBuzz'.");
  });

  it("Se deberia mostrar una kata con dificultad 1 al principio cuando se ordena el catalogo por dificultad ascendente", () =>
  {
    cy.visit("/");
    cy.get("#order_attribute").select("Dificultad Ascendente");
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
    cy.get("#filter_with_solution").click();
    cy.get("#show_result").find("td").eq(5).should("contain", "Si");
  });

  it("Se deberia mostrar el resultado BinarySearchTree al momento de buscar por autor Escorpinson y dar click en buscar", () =>{
    cy.visit("/");
    cy.get("#search_autor_box").type("Escorpinson");
    cy.get("#autor_button").click();
    cy.get("#show_result").find("td").eq(0).should("contain", "BinarySearchTree");
    cy.get("#show_result").find("td").eq(6).should("contain", "Escorpinson");
  });

  it("Se deberia mostrar la kata mas recientemente creada al ordenar descendentemente", () =>{
    cy.visit("/");
    cy.get("#order_attribute").select("fecha creacion descendente");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(7).should("contain", "2023-08-22");
  });

  it("Se deberia mostrar la kata mas antigua al ordenar ascendentemente", () =>{
    cy.visit("/");
    cy.get("#order_attribute").select("fecha creacion ascendente");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(7).should("contain", "2016-05-08");
  });


  it("Se deberia mostrar la kata mas recientemente creada al ordenar descendentemente", () =>{
    cy.visit("/");
    cy.get("#order_attribute").select("NombreAutorDescendente");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(6).should("contain", "Ana");
  });

  it("Se deberia mostrar la kata mas antigua al ordenar ascendentemente", () =>{
    cy.visit("/");
    cy.get("#order_attribute").select("NombreAutorAscendente");
    cy.get("#filter_button").click();
    cy.get("#show_result").find("td").eq(6).should("contain", "Sofia");
  });

  it("Se deberia mostrar que se marca una kata como completada", () =>
  {
    cy.visit("/");
    cy.get('#show_result').find('tr').eq(2).find('td').last().find('input[type="checkbox"]').check();
    cy.get("#show_result").find("tr").eq(2).find("td").last().find('input[type="checkbox"]').should('be.checked');
  });
  
  it("Se deberia visualizar informacion detallada de la kata PalindromeCheck al dar click en el boton leer mas", () => {
    cy.visit("/");
    cy.get("#detalle_button5").click();
    cy.url().should("include", "/detalleKata?indexKata=5");
    cy.get("#titulo_detalle_div").should("contain", "PalindromeCheck");
    cy.get("#descripcion_detalle_div").should("contain", "Write a function that checks if a given string (ignoring spaces, punctuation, and capitalization) is a palindrome."); 
    cy.get("#dificultad_detalle").should("contain", "1"); 
    cy.get("#categoria_detalle").should("contain", "Patrones"); 
    cy.get("#autor_detalle").should("contain", "Sofia"); 
    cy.get("#fecha_creacion_detalle").should("contain", '2017-06-30'); 
    cy.get("#solucion_disponible_detalle").should("contain", "Si");
  });

  it("Se deberia mostrar una kata que no ha sido resuelta", () =>
  {
    cy.visit("/");
    cy.get("#filter_no_solved").click();
    cy.get("#show_result").find("tr").eq(2).find("td").last().find('input[type="checkbox"]').should('no.be.checked');
  });

});
