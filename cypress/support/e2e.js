// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Comando personalizado para verificar que la página cargó
Cypress.Commands.add('checkPageLoaded', () => {
  cy.get('body').should('be.visible')
  cy.get('body').should('not.be.empty')
})

// Comando personalizado para verificar enlaces válidos
Cypress.Commands.add('checkValidLinks', () => {
  cy.get('a[href]').each(($el) => {
    const href = $el.attr('href')
    if (href && !href.startsWith('#')) {
      cy.wrap($el).should('have.attr', 'href')
    }
  })
})