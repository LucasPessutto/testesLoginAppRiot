import HomePage from "../../pages/home-po";

describe("Home Page", () => {
  beforeEach(() => {
    cy.login("admin");
  });

  it("Should components is visible", () => {
    cy.visit("/");
    HomePage.getSearchInput().should("be.visible");
  });
});
