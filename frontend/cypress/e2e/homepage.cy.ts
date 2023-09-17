describe("Homepage Form Test", () => {
  it("Verify if inputs were rendered", () => {
    // Get domain from NEXT_PUBLIC_DOMAIN
    const domain = Cypress.env("PUBLIC_DOMAIN");
    // Visit homepage
    cy.visit(domain);
    // Check if the form exists
    cy.get("form").should("exist");
    // Check if the input text exists
    cy.get('input[type="text"]').should("exist");
    // Type "dof" in the input field
    cy.get('input[type="file"]').should("exist");
  });
});
