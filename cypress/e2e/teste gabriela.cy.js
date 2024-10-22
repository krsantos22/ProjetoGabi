describe('teste site da automate exercise', () => {
  before('entrar no site da automate exercise', () => {
    cy.visit('https://automationexercise.com/login');
  });

  it('cadastrar um cliente no site da automate exercise', () => {
    // Adicionando o título para o Allure
    cy.allure().title('Cadastro de Cliente');

    cy.get('[data-qa="signup-name"]')
      .click()
      .type('Gabriela');

    cy.get('[data-qa="signup-email"]')
      .click()
      .type('gabriela.teste@gmail.com');

    cy.get('[data-qa="signup-button"]')
      .click();

    // Verificação se o cadastro foi bem-sucedido
    cy.get('.signup-form > form > p')
      .should('be.visible')
  });

});