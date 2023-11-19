describe("Presenter", () => {
  it("Se deberia mostrar una tabla en el inicio", () => {
    cy.visit("/");
    cy.get("#show_result").find("table").should("exist");
  });

  it("Se debería mostrar una tabla en el inicio con al menos una fila que tenga texto", () => {
    cy.visit("/");
    cy.get("#show_result").find("table tbody tr").its('length').should('be.gt', 0);
    });
  


});
