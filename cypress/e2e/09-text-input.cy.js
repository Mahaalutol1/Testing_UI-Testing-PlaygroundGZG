describe('Text Input Test', () => {
  it('should type text and verify the button name changes', () => {
    cy.visit('/textinput')
    cy.get('#newButtonName').type('Hello Cypress!')
    cy.get('#updatingButton').click()
    cy.get('#updatingButton').should('have.text', 'Hello Cypress!')
  })
})
