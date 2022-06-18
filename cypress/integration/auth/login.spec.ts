/// <reference types="cypress"/>

import LoginPage from "../../pages/login-po";

describe("Login Page", () => {
  context("Login with error", () => {
    it("Should make login with error message", () => {
      cy.login("invalid-email");
    });
  });

  context("Login with success", () => {
    it("Should login with success", () => {
      cy.login("admin");
      cy.visit("/");
      LoginPage.getSearchInput().should("be.visible");
    });
  });
});
