describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#enviar_button").click();
    cy.get("#show_result").find("table").should("exist");
  });
});
