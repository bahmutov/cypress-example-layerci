/// <reference types="cypress" />
it('adds todos', () => {
  cy.visit('/')
  cy.get('.new-todo').type('write code{enter}').type('write tests{enter}')
  cy.get('.todo-list li').should('have.length', 2)
  cy.wait(10000).then(() => {
    cy.log('done')
  })
})
