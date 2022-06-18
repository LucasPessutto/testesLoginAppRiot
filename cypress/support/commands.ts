// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(role: string): void;
  }
}

const login = (role: string) => {
  cy.session([role], () => {
    let credentials: any;
    cy.visit("/");
    cy.get(".login__Text-sc-gbi31q-0").contains("login").click();
    cy.get(".grDmK").click();
    cy.fixture("users").then((u) => {
      credentials = u.users.find((c: { role: string }) => c.role === role);
      cy.get("#email-input").type(credentials.email, { log: false });
      cy.get("#password-input").type(credentials.password, { log: false });
      cy.get("#login-button").click();
    });
    cy.url().should("contain", "/");
    // cy.visit("/");
  });
};

Cypress.Commands.add("login", login);
