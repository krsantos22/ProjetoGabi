// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Comando de login simples como exemplo
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login'); // Substitua pelo caminho real da sua página de login
    cy.get('input[name="email"]').type(email); // Substitua pelo seletor correto
    cy.get('input[name="password"]').type(password); // Substitua pelo seletor correto
    cy.get('button[type="submit"]').click(); // Substitua pelo seletor correto
  });
  
  // -- This is a child command --
  // Comando para arrastar um elemento (exemplo)
  Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject, options) => {
    cy.wrap(subject).trigger('mousedown', { which: 1 });
    cy.get(options.target).trigger('mousemove').trigger('mouseup', { force: true });
  });
  
  // -- This is a dual command --
  // Comando para descartar uma notificação (exemplo)
  Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject) => {
    if (subject) {
      cy.wrap(subject).click(); // Substitua pelo seletor correto da notificação
    }
  });
  
  // -- This will overwrite an existing command --
  // Exemplo de sobreposição do comando 'visit'
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Aqui você pode adicionar lógica antes da visita
    console.log(`Visitando a URL: ${url}`);
    return originalFn(url, options); // Chama a implementação original
  });
  