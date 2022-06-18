class LoginPage {
  getClickButtonLogin() {
    cy.get(".login__Text-sc-gbi31q-0").contains("login").click();
    cy.get(".grDmK").click();
  }

  getSearchInput() {
    return cy.get('.search__InputUI-sc-1wvs0c1-2')
  }
}

export default new LoginPage();
