// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando para verificar que el título contiene texto específico
Cypress.Commands.add('checkTitle', (expectedText) => {
  cy.title().should('contain', expectedText)
})

// Comando para verificar que un elemento contiene texto específico
Cypress.Commands.add('checkContent', (selector, expectedText) => {
  cy.get(selector).should('contain', expectedText)
})

// Comando para verificar que un enlace funciona correctamente
Cypress.Commands.add('checkLink', (linkText, expectedUrl) => {
  cy.contains(linkText).should('have.attr', 'href', expectedUrl)
})

// Comando para verificar que una sección está visible
Cypress.Commands.add('checkSectionVisible', (sectionTitle) => {
  cy.contains(sectionTitle).should('be.visible')
})

// Comando para navegar a una sección específica
Cypress.Commands.add('navigateToSection', (sectionTitle) => {
  cy.contains(sectionTitle).click()
})