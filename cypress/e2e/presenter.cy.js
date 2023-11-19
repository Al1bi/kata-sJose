describe("Presenter", () => {
  it("Se deberia mostrar una tabla en el inicio", () => {
    cy.visit("/");
    cy.get("#show_result").find("table").should("exist");
  });

  it("Se debería mostrar una tabla en el inicio con al menos una fila que tenga texto", () => {
    cy.visit("/");
    cy.get("#show_result").find("table tbody tr").its('length').should('be.gt', 0);
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
  }
  );
  


});
