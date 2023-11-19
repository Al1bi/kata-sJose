describe("Presenter", () => {
  it("Se deberia mostrar una tabla en el inicio", () => {
    cy.visit("/");
    cy.get("#show_result").find("table").should("exist");
  });

  it("Se debería mostrar una tabla en el inicio con al menos una fila que tenga texto", () => {
    cy.visit("/");
    cy.get("#show_result").find("table tbody tr").its('length').should('be.gt', 0);
    });
  
  it("Se deberia mostrar la kata AnagramDetection en la primera fila de la tabla", () => {
    cy.visit("/");
    cy.get("#show_result").find("td").eq(0).should("contain", "AnagramDetection");
    cy.get("#show_result").find("td").eq(1).should("contain", "Create a program that determines if two provided strings are anagrams of each other, disregarding spaces and capitalization.");
    cy.get("#show_result").find("td").eq(3).should("contain", "2");
  });
  it("Se debería mostrar una barra de busqueda en la pagina de inicio",() =>{
    cy.visit("/");
    cy.get("#search_bar").find("input").should("exist");
  });
  it("Se deberia mostrar una tabla cuando se ingresa una consulta en la barra de busqueda", () =>
  {
    cy.visit("/");
    cy.get("#search_bar").find("input").type("Fizz{Enter}");
    cy.get("#show_result").find("table tbody tr").its('length').should('be.gt', 0);
  });

  it("Se deberia mostrar el resultado Balanced Brackets al momento de Buscar Balanced en la barra de busqueda", () =>{
    cy.visit("/");
    cy.get("#search_bar").find("input").type("BalancedBrackets{Enter}");
    cy.get("#show_result").find("td").eq(0).should("contain", "BalancedBrackets");
    cy.get("#show_result").find("td").eq(1).should("contain", "Given a string containing characters '{', '}', '(', ')', '[', and ']', determine if the input string's brackets are balanced.");
    cy.get("#show_result").find("td").eq(3).should("contain", "2");

  });
  
  it("Se deberia abrir una nueva pagina cuando se presiona el boton leer mas", () => {
    cy.visit("/");
    cy.get("#detalle_button0").click();
    cy.url().should("include", "/detalleKata.html?indexKata=0")
  });

  


});
