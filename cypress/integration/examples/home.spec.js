/// <reference types="cypress" />

context("Home page", () => {
  it("Opens up home page", () => {
    cy.visit("http://localhost:3000");
    cy.contains(
      "Aproveite mais seus momentos de lazer, deixe que nossos chef’s cuidem da cozinha"
    );
    cy.contains("Missão");
    cy.contains(
      "Nossa missão é proporcionar para os clientes, melhores experiências culinárias e que possam aproveitar melhor seu tempo com a família e amigos"
    );
    cy.get(".makeStyles-loginButton-4 > .MuiButton-label").click();
    cy.contains("Login");
  });
});
